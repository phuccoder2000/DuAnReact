import axios from "../Components/utils/axioCustomize";

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

const deleteUser = (userID) => {
    return axios.delete('api/v1/participant', { data: { id: userID } })
}
const getUserWithPaginat = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

//Login
const postLogin = (userEmail, userPassword) => {
    return axios.post(`/api/v1/login`,
        { email: userEmail, password: userPassword }
    );
}
// const postLogin = (email, password) => {
//     return axios.post(`/api/v1/login`,
//         { email, password }
//     );
// }




export { postCreateNewUser, getAllUsers, putApdateUser, deleteUser, getUserWithPaginat,postLogin }