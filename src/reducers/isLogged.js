// const intSate = {
//     users:[{
//         name: "Nevin",
//         email: "nevin@mycit.ie",
//         isLoggedIn: "false"
//     }]



const loggedReducer = (state = false , action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state
        default:
            return state 

    }
}

export default loggedReducer