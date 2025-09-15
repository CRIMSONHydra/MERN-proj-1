import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../redux/authSlice';
import api from '../apiCalls/api';
import toast from 'react-hot-toast';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsRegister(location.pathname === '/register');
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo, location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? '/auth/register' : '/auth/login';
    try {
      const { data } = await api.post(endpoint, { email, password });
      dispatch(setCredentials(data));
      toast.success(isRegister ? 'Registration successful!' : 'Login successful!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        <p onClick={() => navigate(isRegister ? '/login' : '/register')}>
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </p>
      </form>
    </div>
  );
};

export default Auth;