import "./profile.css";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    document.getElementById("profile-page").classList.add("active");
  }, []);

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
                <img src="https://res.cloudinary.com/dnvg6uuxl/image/upload/v1677792081/travel-blog/user-staff_e3vz8z.jpg" alt="about me" />
                <h3>{user.displayName}'s Profile</h3>
                <strong className="role">CEO, Founder</strong>
                <strong>jeanSmith@gmail.com</strong>
                <p>
                  Quos quia provident conse culpa facere ratione maxime commodi
                  voluptates id repellat velit eaque aspernatur expedita.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
