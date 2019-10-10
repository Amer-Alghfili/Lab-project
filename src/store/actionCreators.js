import axios from 'axios';

export const sendSignUpReq = (data, route) => {
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMwSlJwIWQYmxGHP9suxJEAM8j377FoHY', data).then(response => {
            //console.log(response);
            dispatch(acceseeSuccess());
            route('/homePage');
        }).catch(error => {
            dispatch(accessFaliure());
            //console.log(error);
        });
    }
}

const accessFaliure = () => {
    return {
        type : 'ERROR'
    };
}

const acceseeSuccess = () => {
    return {
        type : 'SUCCESS'
    };
}

const logOutReq = () => {
    return {
        type : 'SIGN_OUT'
    };
}

const timeOutCheck = t => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOutReq());
        }, t * 1000);
    }
}

export const sendSignInReq = (data, route) => {
    return dispatch => {
        //console.log(data);
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMwSlJwIWQYmxGHP9suxJEAM8j377FoHY', data).then(response => {
            //console.log(response);
            dispatch(storeToken(response.data.idToken, response.data.localId));
            dispatch(acceseeSuccess());
            route('/homePage');
            dispatch(timeOutCheck(response.data.expiresIn));
        }).catch(error => {
            dispatch(accessFaliure());
            //console.log(error);
        });
    }
}

const storeToken = (t, uId) => {
    return {
        type : 'STORE_TOKEN',   
        token : t,
        userId : uId
    };
}