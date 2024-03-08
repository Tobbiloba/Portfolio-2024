import React from 'react';

const HeroCard = ({main, sub}) => {
  return (
    <div className='bg-slate-900 px-2 madimi shadow-sm shadow-slate-600 h-16 rounded-r-full pr-6 w- justify-center flex items-center flex-col'>
      
      <div className='flex items-center justify-center gap-3'>
      <div className='w-2 h-2 bg-primary rounded-full'></div>
      <h2 className='text-[20px] text-primary font-[600]'>{main}</h2>
      
      </div>
      <p className='text-white text-[15px]'>{sub}</p>
    </div>
  );
}

export default HeroCard;
