import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = async () => {
        // validate

        //summitAPI
        let data = await postLogin(email, password)
        console.log(data, data.EC !== 0, data.Ec)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/')

        }
        if (data && data.EC !== 0) {

            toast.error(data.EM)
        }
    }
    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button>Sign Up</button>
            </div>
            <div className="title mx-auto col-4" >
                phucdeptrai
            </div>
            <div className="welcome mx-auto col-4">
                Hello, who’s this?
            </div>
            <div className="content-form mx-auto col-4">
                <div className='form-group '>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group '>
                    <label>password</label>
                    <input
                        type={"password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button
                        className='btn-summit'
                        onClick={() => handleLogin()}>
                        Login
                    </button>
                </div>
                <div className=' text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to back HomePage</span>
                </div>

            </div>
        </div>
    )
}
export default Login