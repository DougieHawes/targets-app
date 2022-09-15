import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

import { register, reset } from "../features/auth/authSlice";

import Loader from "../components/Loader";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, isLoading, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, message, navigate, user]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("passwords don't match");
    } else {
      const userData = {
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <h2 className="page-title">
        <FaUser /> register
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          id="username"
          name="username"
          onChange={handleChange}
          placeholder="enter username..."
          value={username}
        />
        <input
          className="input"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="enter email..."
          value={email}
        />
        <input
          className="input"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="enter password..."
          value={password}
        />
        <input
          className="input"
          id="password2"
          name="password2"
          onChange={handleChange}
          placeholder="confirm password..."
          value={password2}
        />
        <button className="button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
