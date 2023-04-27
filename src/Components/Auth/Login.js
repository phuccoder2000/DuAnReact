import { useState } from 'react'
import './Login.scss'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        alert('me')
    }
    return (
        <div className="login-container">
            <div className="header">
                Don't have an account yet?
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
                        onClick={() => handleLogin()}
                    >Login</button>
                </div>

            </div>
        </div>
    )
}
export default Login