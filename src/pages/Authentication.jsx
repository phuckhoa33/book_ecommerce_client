import { useEffect } from 'react';
import '../styles/authentication.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

export const Authentication = () => {
    const navigate = useNavigate();

    useEffect(() => {
        $(document).ready(function(){
			$(".veen .rgstr-btn button").click(function(){
				$('.veen .wrapper').addClass('move');
				$('.body').css('background','#e0b722');
				$(".veen .login-btn button").removeClass('active');
				$(this).addClass('active');

			});
			$(".veen .login-btn button").click(function(){
				$('.veen .wrapper').removeClass('move');
				$('.body').css('background','#ff4931');
				$(".veen .rgstr-btn button").removeClass('active');
				$(this).addClass('active');
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
                                <input type="mail" name=""/>
                                <label>Mail or Username</label>
                            </div>
                            <div className="passwd">
                                <input type="password" name=""/>
                                <label>Password</label>
                            </div>
                            <span onClick={() => navigate("/forgotPassword")} style={{color: "black", cursor: "pointer"}}>Forgot Password</span>
                            <hr />
                            <div className="submit">
                                <button className="dark">Login</button>
                            </div>
                        </form>
                        <form id="register" tabindex="502">
                            <h3>Register</h3>
                            <div className="name">
                                <input type="text" name=""/>
                                <label>Full Name</label>
                            </div>
                            <div className="mail">
                                <input type="mail" name=""/>
                                <label>Mail</label>
                            </div>
                            <div className="uid">
                                <input type="text" name=""/>
                                <label>User Name</label>
                            </div>
                            <div className="passwd">
                                <input type="password" name=""/>
                                <label>Password</label>
                            </div>
                            <div className="submit">
                                <button className="dark">Register</button>
                            </div>
                        </form>
                    </div>
                </div>	
            </div>
        </>
    )
}