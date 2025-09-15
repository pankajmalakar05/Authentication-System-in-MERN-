import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function LoginAndSignUpForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && !acceptedTerms) {
      setError('You must accept the Terms and Conditions.');
      return;
    }

    if (email === '' || password === '' || (!isLogin && username === '')) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const url = isLogin
        ? 'http://localhost:5000/api/login'
        : 'http://localhost:5000/api/signup';

      const body = isLogin
        ? { email, password }
        : { username, email, password };

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include', // Important to include cookies
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong');
      } else {
        alert(isLogin ? 'Login Successful!' : 'Sign Up Successful!');

        // Redirecting after successful login
        if (isLogin) {
          navigate('/dashboard');
        } else {
          setIsLogin(true); // Switch to login screen after sign-up
        }

        // Reset form state
        setEmail('');
        setPassword('');
        setUsername('');
        setAcceptedTerms(false);
      }
    } catch (err) {
      setError('Server error. Please try again later.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>

        {error && <p className="error-message">{error}</p>}

        {!isLogin && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
        )}

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {!isLogin && (
          <div className="form-group checkbox">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label>
              I accept the <Link to="/terms">Terms and Conditions</Link>
            </label>
          </div>
        )}

        <div className="button-group">
          <button
            type="button"
            className={`toggle-button ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
            disabled={loading}
          >
            Login
          </button>

          <button
            type="button"
            className={`toggle-button ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
            disabled={loading}
          >
            Sign Up
          </button>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default LoginAndSignUpForm;
