import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";

import { login, reset } from "../features/auth/authSlice";

import Loader from "../components/Loader";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

    const userData = { email, password };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <h2 className="page-title">
        <FaSignInAlt /> login
      </h2>
      <form className="form" onSubmit={handleSubmit}>
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
        <button className="button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
