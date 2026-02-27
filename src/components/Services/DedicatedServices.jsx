import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    icon: "/assets/img/icon/service-icon-1.svg",
    title: "Diagnostic Services",
    desc: "Using dealer-level diagnostic equipment and manufacturer-specific software, we accurately identify engine faults, electrical issues, warning lights, performance problems, and complex system errors.",
    link: "services-single.html",
  },
  {
    id: 2,
    icon: "/assets/img/icon/service-icon-2.svg",
    title: "Routine Maintenance",
    desc: "We keep your vehicle running efficiently, safely, and reliably. From oil changes and fluid checks to scheduled inspections and tune-ups, our team provides quality care that helps prevent costly repairs and ensures long-term performance",
  },
  {
    id: 3,
    icon: "/assets/img/icon/service-icon-3.svg",
    title: "Brake System Repair",
    desc: "We provide professional brake repair and maintenance services to keep your vehicle safe and responsive on the road.",
  },
  {
    id: 4,
    icon: "/assets/img/icon/service-icon-4.svg",
    title: "Engine Repair",
    desc: "Using the latest technology, our technicians quickly identify issues and deliver lasting solutions to restore performance, efficiency, and peace of mind on the road.",
  },
  {
    id: 5,
    icon: "/assets/img/icon/service-icon-5.svg",
    title: "Transmission Services",
    desc: "We offer comprehensive transmission services for all makes and models, ensuring smooth gear changes and optimal performance.",
  },
  {
    id: 6,
    icon: "/assets/img/icon/service-icon-6.svg",
    title: "Electrical Repairs",
    desc: "From complex wiring faults and control module failures to battery drains, lighting issues, and sensor malfunctions, we use manufacturer-grade diagnostic systems to pinpoint and resolve problems efficiently.",
  },
];

function DedicatedServices() {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <SectionHeading
          type={true}
          bgText="SERVICES"
          title="DEDICATED SERVICES"
          desp="We offer a wide range of professional automotive services tailored to German vehicles, ensuring quality and reliability for every client."
        />
        <div className="ak-height-50 ak-height-lg-50"></div>

        <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
          {servicesData.map((service) => (
            <div className="col" key={service.id}>
              <div className="service-card-style-2 type-two" data-aos="fade-up">
                <div className="service-icon">
                  <img src={service.icon} alt="service-icon" />
                </div>
                <div className="service-desp">
                  <Link to={`/service-single/${service.id}`} className="title">
                    {service.title}
                  </Link>
                  <p className="desp">{service.desc}</p>
                  <div className="view-more-btn">
                    <Link
                      to={`/service-single/${service.id}`}
                      className="more-btn"
                    >
                      VIEW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DedicatedServices;
