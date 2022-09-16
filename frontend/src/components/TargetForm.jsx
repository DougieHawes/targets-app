import { useState } from "react";
import { useDispatch } from "react-redux";

import { createTarget } from "../features/target/targetSlice";

function TargetForm() {
  const [formData, setFormData] = useState({
    text: "",
  });

  const { text } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    dispatch(createTarget(formData));

    setFormData({
      text: "",
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          id="text"
          name="text"
          onChange={handleChange}
          placeholder="enter text..."
          value={text}
        />
        <button className="button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default TargetForm;
