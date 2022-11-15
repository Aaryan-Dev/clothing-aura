import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { userAuthentication, userSignup } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';
import AlertMessage from './AlertMessage';

const style = {
    position: 'absolute',
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

const Signup = ({ setauthComponent }) => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [show, setStatus] = useState({
        status: false,
        msg: '',
        type: 'error'
    });

    const handleSignUP = () => {
        if (name !== "" && email !== "" && password !== "") {
            const payload = {
                name, email, password
            }
            dispatch(userSignup(payload)).then(res => {
                console.log(res);
                if (res.payload.msg === 'Signup Successfull') {
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000)
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "success" });
                } else if(res.payload.msg==="User already exists"){
                    setStatus({ ...show, status: true, msg: res.payload.msg, type: "error" });
                }
            }).catch((err) => {
                setStatus({ ...show, status: true, msg: err, type: 'error' });
            })
        }
    }

    return (
        <Box sx={style}>
            <AlertMessage show={show} setStatus={setStatus} />
            <div>
                <Typography id="modal-modal-title1" >
                    Sign In
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <input onChange={(e) => setName(e.target.value)} placeholder='Enter Name*' className='address' />
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
                <button onClick={handleSignUP} className='now'>SIGN IN NOW</button>
                <Typography id="captcha">
                    <p className='google'>This site is protected by reCAPTCHA and the google<br /><u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
                </Typography>
                <div className='down'></div>
                <Typography >
                    <p className='dontt'>Don't have an account?<span style={{ color: "blue", cursor: "pointer" }} onClick={() => setauthComponent('Login')}> Login now</span></p>
                </Typography>
            </div>
        </Box>

    )
}

export default Signup