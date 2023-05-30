// import axios from "../Components/utils/axioCustomize";
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

const deleteUser = (userID) => {
    return axios.delete('api/v1/participant', { data: { id: userID } })
}
const getUserWithPaginat = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

//Login
const postLogin = (userEmail, userPassword,) => {
    return axios.post(`/api/v1/login`,
        { email: userEmail, password: userPassword, delay: 3000 }
    );
}
const postRegister = (userEmail, userPassword, userName) => {
    return axios.post(`/api/v1/register`,
        { email: userEmail, password: userPassword, username: userName }
    );
}
const getQuizBuyUSer = () => {
    return axios.get('/api/v1/quiz-by-participant');
}

const getDataQuiz = (id) => {

    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
}
const postSubmitQuiz = (data) => {
    // console.log('copydata',{...data})
    return axios.post(`/api/v1/quiz-submit`, { ...data });
}

export {
    postCreateNewUser, getAllUsers, putApdateUser,
    deleteUser, getUserWithPaginat, postLogin, postRegister,
    getQuizBuyUSer, getDataQuiz, postSubmitQuiz
}