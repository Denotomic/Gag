import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { MoreBtn } from "../Button/Button";
import TeamCard from "./TeamCard";

const membersData = [
  {
    id: 1,
    name: "German Mech",
    title: "Lead Mechanic",
    image: "/assets/img/member/member_1.jpg",
    desp: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "Nyasa Road, Off Jogoo Road",
      email: "info@germanautogarageltd.co.ke",
      phone: "0722 124 629",
      website: "www.website.com",
    },
  },
  {
    id: 2,
    name: "German Mech",
    title: "Service Advisor",
    image: "/assets/img/member/member_2.jpg",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "Nyasa Road, Off Jogoo Road",
      email: "info@germanautogarageltd.co.ke",
      phone: "0722 124 629",
      website: "www.website.com",
    },
  },
  {
    id: 3,
    name: "German Mech",
    title: "Diagnostic Technician",
    image: "/assets/img/member/member_3.jpg",
    desp: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "Nyasa Road, Off Jogoo Road",
      email: "info@germanautogarageltd.co.ke",
      phone: "0722 124 629",
      website: "www.website.com",
    },
  },
];

const Teams = ({ styleTwo }) => {
  return (
    <div className="container">
      <div className="ak-height-190 ak-height-lg-80"></div>
      <div className="team-contant">
        <div className="team-heading" data-aos="fade-right">
          <SectionHeading
            bgText={"Team"}
            title={"Our Team"}
            desp={
              "Our technicians possess extensive experience. Their expertise covers the full range of models, including the latest releases and classic models, ensuring comprehensive service capabilities. "
            }
          />
          <div className="ak-height-50 ak-height-lg-10"></div>
          <MoreBtn to={"/team"}>VIEW MORE</MoreBtn>
        </div>
        <div
          className="teams"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
            {membersData?.map((member, index) => (
              <TeamCard key={index} member={member} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
