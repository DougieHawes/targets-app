import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
