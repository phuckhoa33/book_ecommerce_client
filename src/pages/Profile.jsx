import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/profile.css';
import { useUserContext } from '../context/userContext';
import { updateUser } from '../store/store';
import { toast } from 'react-toastify';
import { TransactionHistory } from '../components/TransactionHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const avatarImage = "data:image/png;base64,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";
function Profile() {
  const [activeTab, setActiveTab] = useState('account');
  const {user, setUser, updateUserContext} = useUserContext();
  const [username, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const [resetPasswordForm, setResetPasswordForm] = useState({
    oldPassword: "",
    oldPasswordField: "",
    confirmNewPassword: ""
  });


  useEffect(() => {
    setUserName(user?.firstname===null?user?.email:user?.firstname+" "+user?.lastname);
    setResetPasswordForm({...resetPasswordForm, oldPassword: user?.password})
  }, [])

  const {firstname, lastname, avatar, password, email, phone, address, birthday} = user;
  const {oldPassword, oldPasswordField, confirmNewPassword} = resetPasswordForm;


  const handleChangeField = (state, setState, e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const handleSubmitUpdate = async(e) => {
    e.preventDefault();
    setLoading(true);
    const updatedUser = {
      password,
      avatar,
      email,
      phone,
      birthday,
      firstname,
      lastname,
      address
    }

    const {data} = await updateUser(updatedUser);
    console.log(data);
    setLoading(false);
    if(data.data==="Update user is successfully"){
      toast.success("Update user is successfully");
      updateUserContext(user);
    }
    else {
      toast.error("Sorry, my websiter have some error");
    }
  }

  const handleUpdatePassword = async(e) => {
    if(oldPassword!==oldPasswordField){
      toast.error("Your old password is incorrect");
    }
    else if(password!==confirmNewPassword){
      toast.error("Your confirm password is incorrect");
    }
    else {
      await handleSubmitUpdate(e);
    }
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const handleUploadImage = async(e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUser({...user, avatar: base64});
    e.src = base64
  }

  return (
    <div className='profile-update'>
      <section className="py-5 my-5">
        <div className="container">
          <div className="bg-white shadow rounded-lg d-block d-sm-flex mt-5">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <div className="img-circle text-center mb-3">
                  <img src={avatar===null?avatarImage:avatar} alt="Image" className="shadow"/>
                  <input onChange={handleUploadImage} type="file" className='file-custom' id='file-custom'/>
                  <label htmlFor="file-custom">
                    <FontAwesomeIcon icon={faPen}/>
                  </label>
                </div>
                <h4 className="text-center">{username}</h4>
              </div>
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a onClick={() => setActiveTab("account")} className="nav-link active" id="account-tab" data-toggle="pill" role="tab" aria-controls="account" aria-selected="true">
                  <i className="fa fa-home text-center mr-1"></i> 
                  Account
                </a>
                <a onClick={() => setActiveTab("password")}className="nav-link" id="password-tab" data-toggle="pill"  role="tab" aria-controls="password" aria-selected="false">
                  <i className="fa fa-key text-center mr-1"></i> 
                  Password
                </a>
                <a onClick={() => setActiveTab("transaction")}className="nav-link" id="security-tab" data-toggle="pill"  role="tab" aria-controls="security" aria-selected="false">
                  <i className="fa fa-user text-center mr-1"></i> 
                  Transaction History
                </a>
                <a onClick={() => setActiveTab("orders")} className="nav-link" id="application-tab" data-toggle="pill"  role="tab" aria-controls="application" aria-selected="false">
                  <i className="fa fa-tv text-center mr-1"></i> 
                  Orders
                </a>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              {activeTab==="account" && (
                <div className={activeTab==="account"?"tab-pane fade show active":"tab-pane fade"} role="tabpanel" aria-labelledby="account-tab">
                  <h3 className="mb-4">Account Settings</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" name='firstname' value={firstname} onChange={e => handleChangeField(user, setUser, e)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" name='lastname' value={lastname} onChange={e => handleChangeField(user, setUser, e)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Email</label>
                          <input type="text" className="form-control" name='email' value={email} onChange={e => handleChangeField(user, setUser, e)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Phone number</label>
                          <input type="text" className="form-control" name='phone' value={phone}  onChange={e => handleChangeField(user, setUser, e)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Birthday</label>
                          <input type="text" className="form-control" name='birthday' value={birthday} onChange={e => handleChangeField(user, setUser, e)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Address</label>
                          <input type="text" className="form-control" name='address' value={address}  onChange={e => handleChangeField(user, setUser, e)}/>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary" onClick={handleSubmitUpdate}>{loading?<Spinner/>:"Update"}</button>
                  </div>
                </div>
              )}
              {activeTab==="password" && (
                <div className={activeTab==="password"?"tab-pane fade show active":"tab-pane fade"} id="password" role="tabpanel" aria-labelledby="password-tab">
                  <h3 className="mb-4">Password Settings</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Old password</label>
                          <input type="password" name='oldPasswordField' value={oldPasswordField} onChange={e => handleChangeField(resetPasswordForm, setResetPasswordForm, e)} className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>New password</label>
                          <input type="password" name='password' value={password} onChange={e => handleChangeField(resetPasswordForm, setResetPasswordForm, e)} className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                          <label>Confirm new password</label>
                          <input type="password" name='confirmNewPassword' value={confirmNewPassword} onChange={e => handleChangeField(resetPasswordForm, setResetPasswordForm, e)} className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary" onClick={handleUpdatePassword}>Update</button>
                  </div>
                </div>

              )}
              {activeTab==="transaction" && (
                <div className={activeTab==="transaction"?"tab-pane fade show active":"tab-pane fade"} id="security" role="tabpanel" aria-labelledby="security-tab">
                  <h3 className="mb-4">Transaction History</h3>
                    <TransactionHistory/> 
                  <div>
                  </div>
                </div>

              )}
              {activeTab==="orders" && (
                <div className={activeTab==="orders"?"tab-pane fade show active":"tab-pane fade"} id="application" role="tabpanel" aria-labelledby="application-tab">
                 <h3 className="mb-4">Orders</h3>
                    <TransactionHistory/> 
                </div>

              )}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Profile;