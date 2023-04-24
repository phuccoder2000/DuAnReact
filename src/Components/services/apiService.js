import axios from "../utils/axioCustomize";
const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.post('api/v1/participant', data)
}


const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}

const putApdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put('api/v1/participant', data)
}
const putViewUser = (id, username, password, role, image) => {
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.password("password", password)
    data.append("role", role);
    data.append("userImage", image);
    return axios.post('api/v1/participant', data)
}
export { postCreateNewUser, getAllUsers, putApdateUser, putViewUser }