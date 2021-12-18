import React from "react";
import logo from "../logo.svg";
import spinner from "../img/spinner.gif";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [ran, setRan] = React.useState("");
  const getUser = async () => {
    try {
      setLoading(true);
      let query = await fetch("https://alldb-api.herokuapp.com/users");
      let users = await query.json();
      setUsers(users);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      let randomNumber = Math.floor(Math.random() * users.length);
      setUser(users[randomNumber]);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAgain = () => {
    getUser();
  };

  React.useEffect(getUser, []);

  const { name, quote, position, image } = user;
  return (
    <div className="d-flex">
      {loading ? (
        <>
          <img
            className="loading-img"
            src={spinner}
            alt="spinner.gif"
            width="70px"
          />
          <p className="loading-text">Getting data</p>
        </>
      ) : (
        <>
          <div className="user-card">
            <div className="top">
              <img src={image} alt="user_image" />
            </div>
            <div className="bottom">
              <div className="wrapper">
                <h3 className="name">{name}</h3>
                <small className="position">{position}</small>
                <p className="quote">"{quote}"</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              getUserAgain();
            }}
          >
            Get random user
          </button>
        </>
      )}
    </div>
  );
};

export default User;
