const intialState = {
    profile: {
        fname: "",
        lname:" ",
        username: "",
        email: "",
        gender: "",
        Age: 18,
        height: 183,
        weight: 45,
        pasword: " "
    }

}

const userManagmentReducer = (state = intialState, action) => {
    switch(action.type){
        case "SIGN_UP":
            return{
                ...state,
                profile: action.payload.user
            
            }
        case "SIGN_IN":
            return{
                ...state,
                profile: action.payload.user
            }  
        default:
            return state
    }

}

export default userManagmentReducer