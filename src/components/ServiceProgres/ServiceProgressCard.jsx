import React from "react";

const services = [
  {
    title: "PERFOMANCE CHECK",
    description:
      "Our performance check service evaluates your vehicle’s efficiency, speed, and reliability to ensure it’s running at its best.",
    imgSrc: "/assets/img/icon/speedome.svg",
    link: "#",
  },
  {
    title: "AUTO REPAIR",
    description:
      "diagnostics and engine repairs to brakes, tires, and routine maintenance, our skilled technicians deliver quality service that gets you back on the road with confidence.",
    imgSrc: "/assets/img/icon/car-repair.svg",
    link: "#",
  },
  {
    title: "FLEET SERVICES",
    description:
      "we help reduce downtime, extend vehicle life, and ensure your fleet stays road-ready and on schedule.",
    imgSrc: "/assets/img/icon/car.svg",
    link: "#",
  },
];

const ServiceProgressCard = () => {
  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-xl-3 g-4 service-progress-card-position-changes">
        {services.map((service, index) => (
          <div key={index} className="service-progress-card style-two">
            <div className="service-item">
              <div className="heartbeat-icon">
                <a href={service.link}>
                  <span className="ak-heartbeat-btn">
                    <img src={service.imgSrc} alt={service.title} />
                  </span>
                </a>
              </div>
              <div className="service-info">
                <h4 className="title">{service.title}</h4>
                <p className="desp">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProgressCard;
