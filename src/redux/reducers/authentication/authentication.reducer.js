import { 
LOGIN_USER_ACCOUNT,
LOGIN_USER_ACCOUNT_APRROVED,
REGISTER_USER_ACCOUNT,
CLOSE_SESSION_STORAGE,
LOGIN_USER_ACCOUNT_DENIED,
} from '../../actions-types/authentication/authentication.action-types';

const initialState = {
    LOADING: false,
    ERROR_REGISTER: {},
    ERROR_LOGIN: {},
    DATA_RESPONSE: {
        MESSAGE_REGISTER_SUCCESS: '',
        LOGIN_APROVED: false,
        USER_ACCOUNT_TOKEN: '',
        ID_USER_ACCOUNT: ''
    },
};

export const authenticationReducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOGIN_USER_ACCOUNT:
            return {
                ...state,
                LOADING: true,
                ERROR_REGISTER: {},
                ERROR_LOGIN: {},
                DATA_RESPONSE: {
                    MESSAGE_REGISTER_SUCCESS: '',
                    LOGIN_APROVED: false,
                    USER_ACCOUNT_TOKEN: '',
                    ID_USER_ACCOUNT: ''
                }                
            }   
        case LOGIN_USER_ACCOUNT_APRROVED: 
            return {
                ...state,
                LOADING: false,
                ERROR_REGISTER: {},
                ERROR_LOGIN: {},
                DATA_RESPONSE: {
                    MESSAGE_REGISTER_SUCCESS: '',
                    LOGIN_APROVED: true,
                    USER_ACCOUNT_TOKEN: action.payload.USER_ACCOUNT_TOKEN,
                    ID_USER_ACCOUNT: action.payload.ID_USER_ACCOUNT
                }   
            }
         case LOGIN_USER_ACCOUNT_DENIED: 
            return {
                ...state,
                LOADING: false,
                ERROR_REGISTER: {},
                ERROR_LOGIN: action.payload.ERROR_LOGIN,
                DATA_RESPONSE: {
                    MESSAGE_REGISTER_SUCCESS: '',
                    LOGIN_APROVED: false,
                    USER_ACCOUNT_TOKEN: '',
                    ID_USER_ACCOUNT: ''
                }   
            }
        default:
            return state;
    }
}