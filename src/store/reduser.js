const initialState = {
    token : null,
    userId : null, 
    error : false
}

const x = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_TOKEN' :
            return {
                ...state,
                token : action.token,
                userId : action.userId
            }
        case 'SIGN_OUT' :
            return {
                ...state,
                token : null,
                userId : null
            };
        case 'ERROR' :
            return {
                ...state,
                error : true
            };
        case 'SUCCESS' :
            return {
                ...state,
                error : false
            };
    }
    return state;
}

export default x;