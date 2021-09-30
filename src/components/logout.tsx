import { getAuth } from "@firebase/auth";
import { useHistory } from "react-router-dom";

const LogoutPage = () => {
  const history = useHistory();
  const auth = getAuth();

  const Logout = () => {
    auth
      .signOut()
      .then(() => history.push("/login"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="section">
      <p className="text-center">Are you sure you want to logout?</p>
      <div className="text-center">
        <button
          color="danger"
          className="mr-2"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
        <button color="info" className="mr-2" onClick={() => Logout()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
