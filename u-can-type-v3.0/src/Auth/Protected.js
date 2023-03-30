import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { popup } from "../Helpers/notification";
import storage from "../Helpers/storage";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  const [LOGIN, setLOGIN] = useState(false);

  /*----- Handling logout -----*/
  const logOut = () => {
    popup("Logout Successfully");
    storage.remove("login");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  /*----- check logIn -----*/
  useEffect(() => {
    const login = storage.get("login");
    setLOGIN(login);
    if (!login) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Component LOGIN={LOGIN} LOGOUT={logOut} />
    </div>
  );
};

export default Protected;
