import React, { Fragment, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { loginUserAccountAction } from '../../redux/actions/authentication/authentication.action';

const mapStateToProp = (state)=>{
    return {
        AUTHENTICATION: state.AUTHENTICATION
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        loginUserAccountAction: (formValue)=> dispatch( loginUserAccountAction(formValue) )
    }
};


const LoginPageComponent = ({ loginUserAccountAction }) => {

    const [ formState, setFormState ] = useState({
        username:'',
        password:''
    })
    const authenticationState = useSelector(state=>state.AUTHENTICATION);

    console.log(authenticationState.LOADING)

    const handleSubmit = (event) =>{
        event.preventDefault();
        loginUserAccountAction(formState);
    }

    useEffect(() => {
        if(Object.keys(authenticationState.ERROR_LOGIN).length>0){
            setFormState({
                username:'',
                password:''
            })            
        }
    }, [authenticationState.ERROR_LOGIN])

    return (
        <Fragment>


            <div className="card text-center">
                <div className="card-header">
                    LOGIN SERVER
                </div>
                <div className="card-body">
                { //ALERT
                    (Object.keys(authenticationState.ERROR_LOGIN).length>0) &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        Access denied
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                }
                <form onSubmit={ handleSubmit }>
                    <input
                    type="text"
                    placeholder="username"
                    autoComplete="off"
                    name="username"
                    disabled={ (authenticationState.LOADING) ? 'disabled' : '' }
                    value={ formState.username }
                    required
                    className="form-control"
                    onChange={ (event)=>setFormState({...formState,username:event.target.value}) }
                    >
                    </input>
                    <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    value={ formState.password }
                    autoComplete="off"
                    className="form-control mt-2"
                    disabled={ (authenticationState.LOADING) ? 'disabled' : '' }
                    onChange={ (event)=>setFormState({...formState,password:event.target.value}) }
                    >
                    </input>
                    <button  
                    type="submit"
                    className="btn btn-primary mt-2"
                    disabled={ (authenticationState.LOADING) ? 'disabled' : '' }
                    >LOGIN TO SERVER</button>
                </form>
                </div>
                <div className="card-footer text-muted">
                {//SPINNER
                    (authenticationState.LOADING) && 
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                </div>
                </div>

        </Fragment>
    );
}

export const LoginPage = connect(mapStateToProp, mapDispatchToProp)(LoginPageComponent);