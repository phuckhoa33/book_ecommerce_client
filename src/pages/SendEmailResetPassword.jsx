import { useState } from 'react';
import '../styles/forgotpassword.scss';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getUserByEmail, sendEmailResetPassword } from '../store/store';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const ResetPassword = () => {
    // useState for email value
    const [email, setEmail] = useState("");
    const [value, setValue] = useState(null);
    // State for Spinner loading
    const [loading, setLoading] = useState(false);

    const handleSendEmail = async(e) => {
        e.preventDefault();
        if(email===""){
            toast.warn("Please enter your email");
            return;
        }

        setLoading(true);
        const sendEmailProcess = await sendEmailResetPassword({email});
        const getUserByEmailProcess = await getUserByEmail(email);
        Promise.all([getUserByEmailProcess, sendEmailProcess]);
        setLoading(false);
        if(sendEmailProcess.data.message==="Success to call API GetAllUsers"){
            if(getUserByEmailProcess.data.data===null){
                toast.error("Your email is not exist with a certain account in my website");
                return;
            }
            setValue("Oh Yeah");
        }
        cookies.set("userPassword", getUserByEmailProcess.data.data);
    }

    return (
        <div class='empty_layout'>
            <div class="card login-form">
                <div class="card-body">
                    <h3 class="card-title text-center fw-bolder fs-2">Send mail so that reset password</h3>
                    
                    <div class="card-text">
                        {value===null? (
                            <form>
                                <div class="form-group" style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>

                                    <input type="email" class="form-control form-control-sm" name='email' value={email} onChange={(e => setEmail(e.target.value))} placeholder="Enter email address"/>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block" onClick={handleSendEmail}>{loading?<Spinner/>:"Reset Password"}</button>
                            </form>

                        ): (
                            <div className='form-group'>
                                <div class="container">
                                <h1>Check your email</h1>
                                <p>Please click this button so that reset your password</p>
                                <form action="#" method="post">
                                <button type="button" class='btn btn-primary btn-block'><a href="https://mail.google.com/mail">Check email</a></button>
                                </form>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}