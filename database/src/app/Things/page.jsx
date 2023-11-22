import React from "react";

const Things = () => {
  return (
    <>
      <div className="Things-BG">
        <div className="Logo">
          <img src="http://www.fhgroupoc.com/svg/fhlogog.svg" alt="" />
        </div>
        <div className="Box-Flex">
          <div className="Box-01">
            <div className="Icon-Circle">
              <img src="/img/icon.png" alt="" />
            </div>
            <div className="Box-Text">
            <h3>New Patient</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            </div>
          </div>
          <div className="Box-01">
            <div className="Icon-Circle">
              <img src="/img/icon.png" alt="" />
            </div>
            <div className="Box-Text">
            <h3>Appointments</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            </div>
          </div>
          <div className="Box-01">
            <div className="Icon-Circle">
              <img src="/img/icon.png" alt="" />
            </div>
            <div className="Box-Text">
            <h3>Old Patient</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            </div>
          </div>
        </div>
        <div className="Bottom-Text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <h3>www.fhgroupoc.com</h3>
        </div>
      </div>
    </>
  );
};

export default Things;
