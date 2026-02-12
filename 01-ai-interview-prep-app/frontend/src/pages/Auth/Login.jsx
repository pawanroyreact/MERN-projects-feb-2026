import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/userContext";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // Login API call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };
  return (
    <div className="w-[90vw] p-7 flex flex-col justify-center md:w-112.5 md:bg-white md:rounded-xl md:shadow-2xl md:border md:border-gray-100 md:p-10 md:mx-auto lg:w-125 lg:p-12 xl:w-137.5">
      <h3 className="text-lg font-semibold text-black md:text-2xl md:mb-2">
        Welcome Back
      </h3>
      <p className="text-shadow-xs text-slate-700 mt-1.25 mb-6 md:text-slate-600 md:text-sm md:mb-8">
        Please enter your details to login
      </p>

      <form onSubmit={handleLogin}>
        <Input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="john@example.com"
        />

        <Input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="min 8 characters"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button type="submit" className="btn-primary md:mt-2">
          Login
        </button>

        <p className="text-[13px] text-slate-800 mt-3 md:text-center md:mt-5">
          Don't have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => {
              setCurrentPage("signup");
            }}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
