import React from 'react';
import Retro from './assets/image-retro-pcs.jpg';
import Laptop from './assets/image-top-laptops.jpg';
import Grow from './assets/image-gaming-growth.jpg';

const Topics = () => {
  return (
    <>
      <div className='flex flex-col pl-5 pr-5 pb-10 mt-4 gap-5 md:flex-row'>
        <div className='flex items-center gap-5'>
          <img src={Retro} alt="" width={90}/>
          <div className='flex flex-col'>
          <h4 className='text-gray-blue font-extrabold'>01</h4>
          <h2 className='font-extrabold'>Reviving Retro PCs</h2>
          <p className='text-xs'>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <img src={Laptop} alt="" width={90}/>
        <div>
          <h4 className='text-gray-blue font-extrabold'>02</h4>
          <h2 className='font-extrabold'>Top 10 Laptops of 2022</h2>
          <p className='text-xs'>Our best picks for various needs and budgets.</p>
        </div>
        </div>
        <div className='flex items-center gap-5'>
          <img src={Grow} alt="" width={90} />
          <div>
          <h4 className='text-gray-blue font-extrabold'>03</h4>
          <h2 className='font-extrabold'>The Growth of Gaming</h2>
          <p className='text-xs'>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
