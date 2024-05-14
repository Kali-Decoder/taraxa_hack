import React from 'react';
import { data3 } from '../../constants/generalData';

const Solutions = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center lg:mb-[40px] mobile:mb-[40px] flex-col'>
        <div className='flex flex-col'>
          <div className="justify-center z-10 font-bold txt-main mt-[13rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col mobile:items-center lg:flex-row">
            Solution
            <div className="txt-light flex">&nbsp;to all your</div>
            <div className="txt-light flex">&nbsp; problems</div>
          </div>
          <div className="txt-ternary-light lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:w-[250px] md:w-auto text-center mobile:items-center justify-center">
            <div>We’ll help you tackle through problems related with</div>
          </div>
        </div>
      </div>
      <div className='flex w-[90%] flex-wrap justify-center'>
        {data3.map((solution, index) => (
          <div key={index} className='sol-hover txt-light'>
            {solution}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
