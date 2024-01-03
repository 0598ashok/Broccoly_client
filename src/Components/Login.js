import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card login_form_card">
              {isLogin ? (
                <form>
                  <div>
                    <h4>
                      Login - <em>Great to see you back!</em>
                    </h4>
                  </div>
                  <div class="login_input ">
                    <input
                      type="text"
                      placeholder=" "
                      className="form-control"
                    />
                    <label>Email</label>
                  </div>

                  <div class="login_input ">
                    <input
                        type={showPassword ? 'text' : 'password'}
                      placeholder=" "
                      className="form-control"
                    />
                    <label>Password</label>
                    <div
                      className="login_eye_icon"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>

                  <button className="mt-5 login_form_btn">Login</button>
                  <p>
                    I don't have an account ? <a onClick={toggleForm}>Signup</a>
                  </p>
                </form>
              ) : (
                <form>
                  <form>
                    <div>
                      <h4>
                        Signup - <em>Create your account</em>
                      </h4>
                    </div>

                    <div class="login_input ">
                      <input
                        type="text"
                        placeholder=" "
                        className="form-control"
                      />
                      <label>Enter your name</label>
                    </div>

                    <div class="login_input ">
                      <input
                        type="text"
                        placeholder=" "
                        className="form-control"
                      />
                      <label>Enter your email</label>
                    </div>

                    <div class="login_input ">
                      <input
                        type="number"
                        placeholder=" "
                        className="form-control"
                      />
                      <label>Enter contact number</label>
                    </div>

                    <div class="login_input ">
                    <input
                        type={showPassword ? 'text' : 'password'}
                      placeholder=" "
                      className="form-control"
                    />
                    <label>Password</label>
                    <div
                      className="login_eye_icon"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>

                    <button className="mt-5 login_form_btn">Signup</button>
                    <p>
                      Already i have an account ?{" "}
                      <a onClick={toggleForm}>Login</a>
                    </p>
                  </form>
                </form>
              )}
            </div>
          </div>
          <div className="col-md-6 m-auto text-center">
           <div className="">
           If you aren't a customer of Broccoly
           <div >
            <button className="login_form_btn">Start my journey</button>
           
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
