import axios from "../utils/axioCustomize";

const postCreateNewUser = (email,password,username,role,image) =>{
    
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
     return axios.post('api/v1/participant', data)
}
export {postCreateNewUser}