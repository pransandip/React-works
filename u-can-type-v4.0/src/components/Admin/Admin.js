import React, { Fragment, useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Link, useNavigate } from "react-router-dom";

import logoImage from "./logo.png";
import Card from "../UI/card/Card";
import axios from "../../Api/axios";
import { errorPopup } from "../../Helpers/notification";
import storage from "../../Helpers/storage";

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", enableClickToCopy: true, header: "Name" },
      { accessorKey: "email", enableClickToCopy: true, header: "Email" },
      { accessorKey: "isAdmin", enableClickToCopy: true, header: "isAdmin" },
    ],
    []
  );

  //* get all users data
  const getUserdata = async () => {
    const res = await axios.get("api/user/get-all-users").catch((err) => {
      errorPopup("Network error");
      console.log(err);
    });
    if (res) {
      if (res.status === 201) {
        setData(res.data);
      }
    }
  };

  useEffect(() => {
    getUserdata();
    // making fontSize 100%
    let html = window.document.children;
    for (let item of html) {
      item.style.fontSize = "100%";
      item.children[1].className = "font-reset";
    }
    return () => {
      let html = window.document.children;
      for (let item of html) {
        item.style.fontSize = "62.5%";
        item.children[1].className = "";
      }
    };
  }, []);

  /*----- check logIn -----*/
  useEffect(() => {
    const login = storage.get("adminLoginInfo");
    if (!login) {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <Fragment>
      <section className="login-bg">
        <div className="row login-bg-content">
          <div className="col-lg-12 col-md-12 col-12 login-left ">
            <div className="logo">
              <img src={logoImage} alt="" loading="lazy" />
            </div>
            <div className="login-details">
              <h2>Check Your Online </h2>
              <h1>Typing Speed </h1>
              <Card>
                <MaterialReactTable
                  columns={columns}
                  data={data}
                  enablePagination={true}
                  renderDetailPanel={({ row }) => (
                    <table class="table">
                      <thead className="table-success">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Seconds</th>
                          <th scope="col">wpm</th>
                          <th scope="col">cpm</th>
                          <th scope="col">errors</th>
                          <th scope="col">accuracy</th>
                          <th scope="col">status</th>
                        </tr>
                      </thead>
                      {row.original?.scores?.map((item, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{item.id}</td>
                              <td>{item.seconds}</td>
                              <td>{item.wpm}</td>
                              <td>{item.cpm}</td>
                              <td>{item.errors}</td>
                              <td>{item.accuracy}</td>
                              <td>{item.status}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  )}
                />
                ;
              </Card>
            </div>
            <p className="copyright">
              Copyright 2022. All Rights Reserved.{" "}
              <Link to={"/"}>Privacy policy</Link> |{" "}
              <Link to={"/"}>Disclaimer</Link>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Admin;
