import { 
LOGIN_USER_ACCOUNT, 
LOGIN_USER_ACCOUNT_APRROVED,
LOGIN_USER_ACCOUNT_DENIED
} from '../../actions-types/authentication/authentication.action-types';
import {  } from '../user-action';
import {
loginUserAccountService
} from '../../../services/authentication/authentication.service';
import { CALL_API_USERS } from '../../actions-types/users.actions';

//RENAMED TO THUNK
export const loginUserAccountAction = () => {
    return {
        type: CALL_API_USERS
    }
}