import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { readTargets, reset } from "../features/target/targetSlice";

import Loader from "../components/Loader";
import TargetForm from "../components/TargetForm";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message, targets } = useSelector(
    (state) => state.target
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(readTargets());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message, navigate, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Welcome, {user && user.username}</h2>
      <TargetForm />
      <div className="target-grid">
        {targets.map((i) => (
          <div key={i._id}>{i.text}</div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
