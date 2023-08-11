import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Image, Button, InputGroup, Spinner } from 'react-bootstrap';
import { useUserContext } from '../context/userContext';
import { updateUser } from '../store/store';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hover, setHover] = useState(false);
  const {user, updateUserContext} = useUserContext();
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState({
    firstname: user?.firstname,
    lastname: user?.lastname,
    email: user?.email,
    password: user?.password,
    iamge: user?.image
  });

  const {first_name, last_name, password, email, image} = profile;

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: [e.target.value]});
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {data} = await updateUser(profile);
    setLoading(false);
    if(data.data==="Update is successfully"){
      updateUserContext(profile);
      toast.success("Update is successfully");
    }
  }

  const handleImageChange = (event) => {
    
  };

  return (
    <div className="user-profile">
      <Container>
        <Row>
          <Col
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            md={4}
          >
            {!hover ? (
              <Image src={image} roundedCircle />
            ): (
              <Form.Group>
              <label htmlFor="file-input">
                <div className="circular-image">
                  <span>Choose Image</span>
                </div>
              </label>
              <Form.Control
                id="file-input"
                type="file"
                // accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </Form.Group>
            )}
          </Col>
          <Col md={8}>
            <h2>User Profile</h2>
            <Form>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='first_name' value={first_name} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='last_name' value={last_name} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={email} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control type={showPassword ? 'text' : 'password'} value={password} name='password' onChange={handleChange} placeholder="Enter your password" />
                  <InputGroup.Text onClick={handleShowPassword}>
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
                {loading ? (<Spinner/>): "Save"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
