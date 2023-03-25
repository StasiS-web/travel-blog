import "./profile.css";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("profile-page").classList.add("active");
  }, []);

  const onProfileChange = (event) => {
    event.preventDefault();
    navigate("/profile-edit")
  }

  return (
    <div id="profile-page">
      <div id="content" className="no-pd-top">
        <div className="container">
          <div className="row animate-box">
            <div className="col-6 col-offset3 text-center heading">
              <h2>
                <span>Profile</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-offset3">
              <div className="staff">
                <img src={user.photo} alt="about me" />
                <h3>{user.name}'s Profile</h3>
                <strong className="role">CEO, Founder</strong>
                <strong>{user.email}</strong>
                <p>
                  {user.bio}
                </p>
                <button className="btn btn-outline" onClick={onProfileChange}>
                    Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
