import { useEffect, useState } from 'react';
import '../styles/authentication.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../store/store';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useUserContext } from '../context/userContext';

const initialLoginForm = {
    email_login: "",
    password_login: ""
}

const initialRegisterForm = {
    email_register: "",
    password_register: "",
    fullname: "",
    username: ""
}

export const Authentication = () => {
    const navigate = useNavigate();
    const {handleAuthentication} = useUserContext();
    // Create state
    const [formLogin, setFormLogin] = useState(initialLoginForm);

    const [formRegister, setFormRegister] = useState(initialRegisterForm);
    
    const [currentFormType, setCurrentFormType] = useState("login");
    
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        $(document).ready(function(){
            $(".veen .rgstr-btn button").click(function(){
                $('.veen .wrapper').addClass('move');
                $('.body').css('background','#e0b722');
                $(".veen .login-btn button").removeClass('active');
                $(this).addClass('active');
                setFormRegister({});
                setFormLogin({});
            });
            $(".veen .login-btn button").click(function(){
                $('.veen .wrapper').removeClass('move');
                $('.body').css('background','#ff4931');
                $(".veen .rgstr-btn button").removeClass('active');
                $(this).addClass('active');
                setFormLogin({});
                setFormRegister({});
            });
        });
    }, [])


    // Create 
    const {email_login, password_login} = formLogin;
    const {email_register, password_register, fullname, username} = formRegister;

    // function
    const handleChangeField = (e, setFunc, func) => {
        setFunc({...func, [e.target.name]: e.target.value});
    }   

    const handleSubmitLogin = async(e) => {
        e.preventDefault();

        if(checkFormValue(currentFormType, "") || checkFormValue(currentFormType, undefined)){
            toast("You must enter all fields")
            return;
        }

        const formValue = {
            email: email_login,
            password: password_login
        };
        setLoading(true);
        const {data} = await login(formValue);
        setLoading(false);
        const result = data?.data;
        if(result?.token){
            toast.success(result?.message);
            handleAuthentication(data.data.token);
            navigate("/");
            return;
        }
        toast.error(result?.message);
    }

    const handleSubmitRegister = async(e) => {
        e.preventDefault();
        const formValue = {
            email: email_register,
            password: password_register,
            fullname,
            username,
            role: "USER"
        }
        console.log(formValue);
        if(checkFormValue(currentFormType, "") || checkFormValue(currentFormType, undefined)){
            toast("You must enter all fields")
            return;
        }

        if(checkIsValidEmail(email_register)){
            const formValue = {
                email: email_register,
                password: password_register,
                fullname,
                username,
                role: "USER"
            }
    
            setLoading(true);
            const {data} = await register(formValue);
            setLoading(false);
            const result = data?.data;
            if(result?.token){
                toast.success(result?.message);
                handleAuthentication(result?.token);
                navigate("/");
                return;
            }
            toast.error(result?.message);

        }
        else {
            toast("Email is not valid format")
        }
        
    }

    const checkIsValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }



    const checkFormValue = (type, requiredValue) => {
        if(type==="login"){
            if(email_login===requiredValue || password_login===requiredValue){
                return true;
            }
        }
        else {
            if(email_register===requiredValue || password_register===requiredValue || username===requiredValue || fullname===requiredValue){
                return true;
            }
        }
        return false;
    }


    const convertAuthenticatonType = (authType) => {
        setCurrentFormType(authType)
        setFormLogin(initialLoginForm);
        setFormRegister(initialLoginForm);
    }




    return (
        <>
            <div className="body">
                <div className="veen">
                    <div className="login-btn splits">
                        <p>Already an user?</p>
                        <button onClick={() => convertAuthenticatonType("login")} className="active">Login</button>
                    </div>
                    <div className="rgstr-btn splits">
                        <p>Don't have an account?</p>
                        <button onClick={() => convertAuthenticatonType("register")}>Register</button>
                    </div>
                    <div className="wrapper">
                        <form id="login" tabindex="500">
                            <h3>Login</h3>
                            <div className="mail">
                                <input type="email" name="email_login" required value={email_login} onChange={(e) => handleChangeField(e, setFormLogin, formLogin)}/>
                                <label>Mail or Username</label>
                            </div>
                            <div className="passwd">
                                <input type="password" name="password_login" value={password_login} onChange={(e) => handleChangeField(e, setFormLogin, formLogin)}/>
                                <label>Password</label>
                            </div>
                            <span onClick={() => navigate("/forgotPassword")} style={{color: "black", cursor: "pointer"}}>Forgot Password</span>
                            <hr />
                            <div className="submit">
                                <button className="dark" onClick={handleSubmitLogin}>
                                    {loading ? (    
                                        <>
                                            <Spinner/>
                                        </>
                                    ): (
                                        <>Login</>
                                    )}
                                </button>
                            </div>
                        </form>
                        <form id="register" tabindex="502">
                            <h3>Register</h3>
                            <div className="name">
                                <input type="text" name="fullname" value={fullname} onChange={(e) => handleChangeField(e, setFormRegister, formRegister)}/>
                                <label>Full Name</label>
                            </div>
                            <div className="mail">
                                <input type="email" name="email_register" required value={email_register} onChange={e => handleChangeField(e, setFormRegister, formRegister)}/>
                                <label>Mail</label>
                            </div>
                            <div className="uid">
                                <input type="text" name="username" value={username} onChange={e => handleChangeField(e, setFormRegister, formRegister)}/>
                                <label>User Name</label>
                            </div>
                            <div className="passwd">
                                <input type="password" name="password_register" value={password_register} onChange={e => handleChangeField(e, setFormRegister, formRegister)} pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$" required/>
                                <label>Password</label>
                            </div>
                            <div className="submit">
                                <button className="dark" onClick={handleSubmitRegister}>
                                    {loading ? (    
                                        <>
                                            <Spinner/>
                                        </>
                                    ): (
                                        <>Register</>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>	
            </div>
        </>
    )
}