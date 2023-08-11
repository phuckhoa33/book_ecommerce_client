import { useEffect, useState } from 'react';
import '../styles/authentication.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../store/store';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useUserContext } from '../context/userContext';

export const Authentication = () => {
    const navigate = useNavigate();
    const {handleAuthentication} = useUserContext();
    // Create state
    const [formLogin, setFormLogin] = useState({
        emailLogin: "",
        passwordLogin: ""
    });

    const [formRegister, setFormRegister] = useState({
        firstnameRegister: "",
        lastnameRegister: "",
        emailRegister: "",
        passwordRegister: ""
    });

    const [loading, setLoading] = useState(false);

    // Create 
    const {emailLogin, passwordLogin} = formLogin;
    const {firstnameRegister, lastnameRegister, emailRegister, passwordRegister} = formRegister;

    // function
    const handleChangeField = (e, setFunc, func) => {
        setFunc({...func, [e.target.name]: e.target.value});
    }

    const handleSubmitLogin = async(e) => {
        e.preventDefault();

        if(handleCheckEmptyValueOfField("login")){
            toast.warn("You  must enter value in fields");
            return;
        };
        const formValue = {
            email: emailLogin,
            password: passwordLogin
        };
        setLoading(true);
        const {data} = await login(formValue);
        setLoading(false);
        const message = data.data.message;
        if(message==="Login is successfuly"){
            toast.success(message);
            handleAuthentication(data.data.user);
            navigate("/");
            return;
        }
        toast.error(message);
    }

    const handleSubmitRegister = async(e) => {
        e.preventDefault();
        if(handleCheckEmptyValueOfField("register")){
            toast.warn("You must enter value in fields");
            return;
        }
        
        const formValue = {
            email: emailRegister,
            password: passwordRegister,
            firstname: firstnameRegister,
            lastname:lastnameRegister,
            roleid: 0
        }

        setLoading(true);
        const {data} = await register(formValue);
        setLoading(false);
        const message = data.data.message;
        if(message==="Register is successfully"){
            toast.success(message);
            handleAuthentication(data.data.user);
            navigate("/");
            return;
        }
        toast.error(message);
    }


    const handleCheckEmptyValueOfField = (type) => {
        if(type==="login"){
            if(emailLogin==="" || passwordLogin===""){
                return true;
            }
        }
        else {
            if(emailRegister==="" || passwordRegister==="" || firstnameRegister==="" || lastnameRegister===""){
                return true;
            }
        }
        return false;
    }


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

    return (
        <>
            <div className="body">
                <div className="veen">
                    <div className="login-btn splits">
                        <p>Already an user?</p>
                        <button className="active">Login</button>
                    </div>
                    <div className="rgstr-btn splits">
                        <p>Don't have an account?</p>
                        <button>Register</button>
                    </div>
                    <div className="wrapper">
                        <form id="login" tabindex="500">
                            <h3>Login</h3>
                            <div className="mail">
                                <input type="email" name="emailLogin" required value={emailLogin} onChange={(e) => handleChangeField(e, setFormLogin, formLogin)}/>
                                <label>Mail or Username</label>
                            </div>
                            <div className="passwd">
                                <input type="password" name="passwordLogin" value={passwordLogin} onChange={(e) => handleChangeField(e, setFormLogin, formLogin)}/>
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
                                <input type="text" name="firstnameRegister" value={firstnameRegister} onChange={(e) => handleChangeField(e, setFormRegister, formRegister)}/>
                                <label>Full Name</label>
                            </div>
                            <div className="mail">
                                <input type="email" name="emailRegister" required value={emailRegister} onChange={e => handleChangeField(e, setFormRegister, formRegister)}/>
                                <label>Mail</label>
                            </div>
                            <div className="uid">
                                <input type="text" name="lastnameRegister" value={lastnameRegister} onChange={e => handleChangeField(e, setFormRegister, formRegister)}/>
                                <label>User Name</label>
                            </div>
                            <div className="passwd">
                                <input type="password" name="passwordRegister" value={passwordRegister} onChange={e => handleChangeField(e, setFormRegister, formRegister)} pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$" required/>
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