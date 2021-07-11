import axios from '../axiosDefult';


export const Login = (data) => {
    return dispatch => {
        dispatch({ type: "TEST", payloed: true })

        data = {
            "UserLoginName": "TamTam",
            "UserPassword": "123",
            "UserFirstName": "Tamar",
            "UserLastName": "Lev",
            "UserFirstPhone": "0583235445",
            "UserSecondPhone": "0527146985",
            "UserEmail": "T123@gmail.com"
        }
        axios.post('/Users/Post', data)
            .then(x => {
                const user = {
                    UserLoginName: data.UserLoginName,
                    id: x.data
                }
                dispatch({ type: "LOGIN", user: user })
            }).catch(x => {
                console.log(x)
            }).finally(() => {
                dispatch({ type: "TEST", payloed: false })
            })
    }

}