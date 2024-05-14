import React from "react";
import { data1 } from '../../constants/generalData'; 

const RoadMap = () => {
  return (
    <>
      <div className="timeline" id="userflow">
        <div className="outer flex justify-center items-center flex-col">
          <div className="justify-center z-10 mb-20 font-bold txt-main mt-[4rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col mobile:items-center lg:flex-row">
            User <span className="text-white">&nbsp;Flow</span>
          </div>

          {data1.map((item, index) => (
            <div key={index} className="card">
              <div className="info bg-black">
                <h3 className="title">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
