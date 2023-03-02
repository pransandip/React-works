import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  const [LOGIN, setLOGIN] = useState("");

  /*----- Handling logout -----*/
  const logOut = () => {
    localStorage.setItem("login", "");
    navigate("/");
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
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
