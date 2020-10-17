import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";
import OrderedService from "./OrderedService";
import FadeLoader from "react-spinners/FadeLoader";

const ServiceStatus = () => {
  document.title = "Service List | Creative Agency";
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [serviceList, setServiceList] = useState([]);

  const [loading, setLoading] = useState(true);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: #fbd062;
`;
  useEffect(() => {
    fetch("https://creative-agency-pallab.herokuapp.com/userOrderList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginUser.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setServiceList(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div className="row">
            <FadeLoader
              css={override}
              size={200}
              color={"orange"}
              loading={loading}
            />
            {serviceList.map((service) => (
              <OrderedService service={service} key={service._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStatus;
