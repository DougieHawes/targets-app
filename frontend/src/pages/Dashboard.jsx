import { useEffect } from "react";
import { FiTarget } from "react-icons/fi";
// import { GiSportMedal } from "react-icons/gi";
// import { MdSportsEsports }from "react-icons/md"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  deleteTarget,
  readTargets,
  reset,
} from "../features/target/targetSlice";

import Loader from "../components/Loader";
import TargetForm from "../components/TargetForm";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message, targets } = useSelector(
    (state) => state.target
  );

  // const gamingIcon = <MdSportsEsports />;
  // const sportIcon = <GiSportMedal />;
  const targetIcon = <FiTarget />;

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
          <div className="target-card" key={i._id}>
            <div
              className="target-card-icon"
              onClick={() => dispatch(deleteTarget(i._id))}
            >
              {targetIcon}
            </div>
            <div className="target-card-text">{i.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
