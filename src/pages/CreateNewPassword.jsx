import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/createNewPassword.css'; // Import file CSS tùy chỉnh
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateUser } from '../store/store';

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
  const {token} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) {
      navigate("/error")
    }

    localStorage.setItem('token', token);

  }, [])

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Thực hiện xử lý reset password tại đây
    if (newPassword === confirmNewPassword) {
      // Gửi dữ liệu đi hoặc thực hiện hành động cần thiết
      
      
    } else {
      toast.warn('Passwords do not match');
    }
  };

  return (
    <div className="reset-password-form">
      <h2>Reset Password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmNewPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </div>
  );
}

export default ResetPasswordForm;
