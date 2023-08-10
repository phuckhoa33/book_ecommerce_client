import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/createNewPassword.css'; // Import file CSS tùy chỉnh
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies.get('userPassword')){
      navigate("errorSoMan");
    }
  }, [])

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý reset password tại đây
    if (newPassword === confirmNewPassword) {
      // Gửi dữ liệu đi hoặc thực hiện hành động cần thiết
    } else {
      alert('Passwords do not match');
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
