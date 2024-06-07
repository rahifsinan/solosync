import React, { useState } from 'react';
import './App.css'; // Assuming you have your styles in App.css

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const csrfToken = getCookie('csrftoken');

    fetch('/your-login-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage(<div className="alert alert-success">Login successful!</div>);
          // Redirect to another page or update the UI
        } else {
          setMessage(<div className="alert alert-danger">{data.message}</div>);
        }
      })
      .catch((error) => {
        setMessage(<div className="alert alert-danger">An error occurred. Please try again.</div>);
      });
  };

  return (
    <div className="container" style={{ marginTop: '70px', minHeight: '600px' }}>
      <div className="row">
        <div className="col-12">
          <h4 className="mb-3">User Login</h4>
          <hr style={{ borderColor: '#b8bfc2' }} />
          <div id="message-container">{message}</div>
        </div>
      </div>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">User Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Enter User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
