import { 
LOGIN_USER_ACCOUNT, 
LOGIN_USER_ACCOUNT_APRROVED,
LOGIN_USER_ACCOUNT_DENIED
} from '../../actions-types/authentication/authentication.action-types';
import {
loginUserAccountService
} from '../../../services/authentication/authentication.service';


export const loginUserAccountAction = (formvalue) => {
    return (dispatch, getState)=> {
        dispatch({ type: LOGIN_USER_ACCOUNT });
        loginUserAccountService(formvalue).then((response)=>{
            dispatch({
                type: LOGIN_USER_ACCOUNT_APRROVED,
                payload: {
                    USER_ACCOUNT_TOKEN: response.token,
                    ID_USER_ACCOUNT: response.id_user_account
                }
            });
        }).catch((error)=>{
            dispatch({
                type: LOGIN_USER_ACCOUNT_DENIED,
                payload: {
                    ERROR_LOGIN: error,
                }
            })
        });
    }
}