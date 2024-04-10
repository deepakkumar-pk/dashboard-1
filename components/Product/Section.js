import React from 'react'
import ProgressBar from './ProgressBar';

const Section = ({percentage, increase, decrease, title, value, color, strokeColor}) => {
  return (
    <div className="bg-white  rounded-lg px-4 py-4">
      <div className='space-y-6'>
        <div className="flex items-center justify-between gap-10">
          <div className='space-y-0.5'>
            <h6 className='text-xs text-text'>{ title }</h6>
            <h3 className='text-xl font-semibold'>{ value}</h3>
          </div>
          <ProgressBar percentage={percentage} color={ color } strokeColor={strokeColor} />
        </div>
        <div className="flex items-center justify-between">
          <div className='text-xs text-text'>
            <span className={increase ? 'text-textGreen' : 'text-textRed'}>{ increase || decrease }%</span> {increase?'Increase':'Decrease'}
          </div>
          <div className='flex justify-end text-xs text-text'>Last month</div>
        </div>
      </div>
    </div>
  );
}

export default Section