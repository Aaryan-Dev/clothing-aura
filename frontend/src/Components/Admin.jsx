import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AlertMessage from './AlertMessage';
import { adminAuthentication } from '../Redux/Auth/action';
import stylesc from 'styled-components'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Admin = () => {

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
    const handleAdminLogin = () => {
        const payload = {
            email, password
        }
        dispatch(adminAuthentication(payload)).then((res) => {
            console.log(res)
            if (res.payload.msg === 'Admin Login Successfull') {
                setStatus({ ...show, status: true, msg: res.payload.msg, type: "success" });
                setTimeout(() => {
                    navigate("/admin/dashboard");
                }, 2000)
            } else {
                setStatus({ ...show, status: true, msg: res.payload.msg, type: "error" });
            }
        }).catch((err) => {
            setStatus({ ...show, status: true, msg: err, type: 'error' });
        })
    }

    return (
        <AdminContainer>
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
                    <button onClick={handleAdminLogin} className='now'>LOGIN</button>
                    <Typography id="captcha">
                        <p className='google'>This site is protected by reCAPTCHA and the google<br /><u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
                    </Typography>
                    <div className='down'></div>
                </div>
            </Box>
        </AdminContainer>
    )
}

export default Admin
const AdminContainer = stylesc.div`
    width:100%;
    height:100vh;
    position:relative;
    border:2px solid green;

`;
