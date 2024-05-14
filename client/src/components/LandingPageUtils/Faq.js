import React from 'react'
import {useState} from 'react'
import {data} from '../../constants/generalData';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className='flex justify-center flex-col items-center mb-4' id="faq">
        <div className="z-10 font-bold txt-main mt-[10rem] mobile:text-[40px] lg:text-[64px] flex mobile:flex-col mobile:items-center lg:flex-row">
          Frequently Asked
          <span className="txt-light">&nbsp;Questions</span>
      </div>
      <div className='flex justify-center mt-20 h-[60%] w-[90vw]'>
        <div className='lg:w-[60vw] mobile:w-[100vw]'>
          {data.map((item, i) => (
            <div className='mobile:px-4 lg:px-8 mt-4' key={i}>
              <div
                id='blueborder'
                onClick={() => toggle(i)}
                className='flex w-[100%] justify-between txt-light mobile:text-[20px] lg:text-[15px] mobile:p-2 lg:p-6 cursor-pointer'
              >
                <h1 className='z-10'>{item.question}</h1>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div id='blueborder2' className={selected === i ? 'content show' : 'content'}>             
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;