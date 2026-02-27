import React from "react";
import MemberCard from "./MemberCard";
import membersData from "../../dataJson/teamMembersData.json";
import SectionHeading from "../SectionHeading/SectionHeading";

const members = [
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
      address: "Nyasa Road, Off Jogoo Road Next to Makadara Law Courts",
      email: "info@gag.co.ke",
      phone: "0722124 629 0725 990 729",
      website: "www.gag.co.ke",
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
      address: "Nyasa Road, Off Jogoo Road Next to Makadara Law Courts",
      email: "info@gag.co.ke",
      phone: "0722124 629 0725 990 729",
      website: "www.gag.co.ke",
    },
  },
  {
    id: 3,
    name: "Cathy Sparkman",
    title: "Diagnostic Technician",
    image: "/assets/img/member/member_3.jpg",
    desp: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "info@gag.co.ke",
      phone: "0722124 629 0725 990 729",
      website: "www.gag.co.ke",
    },
  },
];

function MemberContent() {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <SectionHeading
        type={true}
        bgText="Pricing"
        title="Pricing"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
      />
      <div className="ak-height-50 ak-height-lg-50"></div>
      <div className="all-members">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          {members?.map((member, index) => (
            <MemberCard key={index} member={member} delay={index * 50} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberContent;
