import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

const ProfileEdit = () => {
  const { user, updateProfile } = useAuthContext();
  const navigate = useNavigate();

  const onSave = (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let profileImg = formData.get("profileImg");
    let name = formData.get("name");
    let email = formData.get("email");
    let profileBio = formData.get("bio");
    let position = formData.get("jobTitle");

    updateProfile({
      photo: profileImg,
      name: name,
      email: email,
      bio: profileBio,
      jobTitle: position,
    });

    navigate(`/profile`);
  };

  return (
    <div id="profile-edit">
      <div id="content" className="no-pd-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-offset0 text-center heading">
              <h2>
                <span>Edit Profile</span>
              </h2>
            </div>
          </div>
          <div className="col-9 row">
          <form id="edit" method="post" onSubmit={onSave}>
            <div className="form-group">
              <div className="col-12 field">
                <label htmlFor="profileImg">Profile Image</label>
                <input
                  type="text"
                  id="profileImg"
                  name="profileImg"
                  className="form-control"
                  defaultValue={user.photo}
                />
              </div>
              <div className="col-12 field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  defaultValue={user.name}
                />
              </div>
              <div className="col-12 field">
                <label htmlFor="date">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  defaultValue={user.email}
                />
              </div>
              <div className="col-12 field">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="form-control"
                  defaultValue={user.jobTitle}
                />
              </div>
              <div className="col-12 field">
                <label htmlFor="content">About Me</label>
                <textarea
                  id="bio"
                  name="bio"
                  className="form-control"
                  defaultValue={user.bio}></textarea>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button className="btn btn-outline">
                Cancel
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
