import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [error, setError] = useState('');
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!formData.username || !formData.email || !formData.password) {
        setError('Please fill in all fields.');
      } else {
        setError('');
  
        console.log('Form submitted:', formData);
        e.target.reset();
        setFormData({
          username: '',
          email: '',
          password: '',
        });
      }
    };
  
    return (
      <div className='registration-container'>
        <div class='text'>
          <h1>Get Started</h1>
          <h3>Allready have an account?</h3>
          <h4 className='main-color'>Log in</h4>
        </div>
        <div className="social-buttons">
          <button className="google-button">
            <img
              src="Google_Logo.png"
              alt="Google Logo"
              className="google-logo"
            />
            sign up
          </button>
          <button className="facebook-button">
            <img
              src="Facebook_Logo.png"
              alt="Facebook Logo"
              className="facebook-logo"
            />
            sign up
          </button>
        </div>
        
        <h2>Or</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label"> Name</label>
            <div class="ui left icon input form-input" >
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-input"
            />
            <i aria-hidden="true" class="user icon"></i>
            </div>
            
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label"> Email</label>
            <div class="ui left icon input form-input" >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i aria-hidden="true" class="at icon"></i>
            </div>
            
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label"> Password</label>
            <div class="ui left icon input form-input" >
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
            <i aria-hidden="true" color='black' class="lock icon"></i>
            </div>
            
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  }
  
  export default RegistrationForm;