import React from "react";

import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Appointment = () => {
  return (
    <>
      <CommonPageHero title={"Appointment"} />
      <AppointmentForm />
      <div className="ak-height-125 ak-height-lg-80"></div>

      <SectionHeading
        type={true}
        bgText={"PROCESS"}
        title={"PROCESS / FEATURE"}
        desp={
          "We are located along nyasa road off Jogoo road next to Makadara law court. reach us on +254 725 990 729 or +254 722 124 629 or email us at info@germanautogarage.co.ke"
        }
      />
      <ServiceProgres />
    </>
  );
};

export default Appointment;
