import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { userAuthentication } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';
import AlertMessage from './AlertMessage';
import stylesc from "styled-components"

const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: 300,
    height: 430,

    width: 350,

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Login = ({ setauthComponent }) => {
    const navigate = useNavigate();
    const [show, setStatus] = useState({
        status: false,
        msg: '',
        type: 'error'
    });
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);
    const handleLogin = () => {
        const payload = {
            email, password
        }
        dispatch(userAuthentication(payload)).then((res) => {
            console.log(res)
            if (res.payload.message === 'Login successfull') {
                setStatus({ ...show, status: true, msg: res.payload.message, type: "success" });
                setTimeout(() => {
                    navigate("/");
                }, 2000)
            } else {
                setStatus({ ...show, status: true, msg: res.payload.message, type: "error" });
            }
        }).catch((err) => {
            setStatus({ ...show, status: true, msg: err, type: 'error' });
        })
    }

    return (
        <LoginContainer>

            <Box sx={style}>
                <AlertMessage show={show} setStatus={setStatus} />
                <div>
                    <Typography id="modal-modal-title1" >
                        Login
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='Email Address*' className='address' />
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <input onChange={(e) => setPassword(e.target.value)} placeholder='Password*' className='passd' />
                    </Typography>
                    <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
                        <input type={"checkbox"} />
                        <p className='remem'>Remember me</p>
                        <p className='forgot'>Forgot Password?</p>
                    </Typography>
                    <button onClick={handleLogin} className='now'>LOGIN</button>
                    <Typography id="captcha">
                        <p className='google'>This site is protected by reCAPTCHA and the google<br /><u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
                    </Typography>
                    <div className='down'></div>
                    <Typography >
                        <p className='dontt'>Don't have an account?<span style={{ color: "blue", cursor: "pointer" }} onClick={() => setauthComponent('Signup')}> Sign up now</span></p>
                    </Typography>
                </div>
            </Box>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = stylesc.div`
    widht:100%;
    height:100vh;
    position:relative;
`;
