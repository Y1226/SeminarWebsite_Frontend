import produce from 'immer'

const SignInState = {
    SeminarList: [],
    CurrentUser: {
        userName: '',
        password: '',
        seminarCode: ''
    }
}

export const SignInReducer = produce(
    (s, a) => {
        switch (a.type) {
            case 'Fill-Seminar-Data':
                s.SeminarList = a.payload; 
                break;
        
            default:
                break;
        }
    },
    SignInState
)

export default SignInReducer