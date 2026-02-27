import React from "react";
const serviceData = {
  title: "Get expert car repair and auto services at for a smooth, safe ride.",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  buttonText: "VIEW MORE",
  buttonLink: "appointment.html",
};

const ExpertService = () => {
  return (
    <>
      <div className="ak-height-75 ak-height-lg-50"></div>
      <div className="container">
        <div className="play-slider-heading">
          <div className="heading-area">
            <h3 className="title">{serviceData.title}</h3>
          </div>
          <div className="desp-area">
            <p className="desp">{serviceData.description}</p>
            <a href={serviceData.buttonLink} className="common-btn type-1">
              {serviceData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertService;
