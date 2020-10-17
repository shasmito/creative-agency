import React, { useEffect, useState } from "react";
import Services from "./Services";
import FadeLoader from "react-spinners/FadeLoader";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  height: 4;
  width: 100;
  radius: 10;
  margin: 2;
`;
  useEffect(() => {
    fetch("https://creative-agency-pallab.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <section id="services" className="container service-section">
      <h2 className="text-center mb-3">
        Provide awesome <span className="brand-color">services</span>
      </h2>

      {/* {services.length === 0 ? (
        <div className="loading col-12">
          <img src={loading} alt="loading" />
        </div>
      ) : ( */}
      <FadeLoader
        css={override}
        size={200}
        color={"orange"}
        loading={loading}
      />
      <div className="row mt-5">
        {services.map((service) => (
          <Services service={service} key={service._id} />
        ))}
      </div>
      {/* )} */}
    </section>
  );
};

export default Service;
