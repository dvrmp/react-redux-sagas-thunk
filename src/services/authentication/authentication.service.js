import axios from 'axios';
import { ROUTES } from '../../enviroments/routes';


export const loginUserAccountService = (formValue) => {
    return new Promise((resolve,reject)=>{
        axios.post(ROUTES.AUHTENTICATION.LOGIN_USER_ACCOUNT,formValue).then((response)=>{
            if(response.data.success){
                resolve(response)
            }
        }).catch((error)=>reject(error));
    });
}