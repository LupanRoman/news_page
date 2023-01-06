import React from 'react';
import ImgMob from './assets/image-web-3-mobile.jpg';
import ImgPc from './assets/image-web-3-desktop.jpg';
const News = () => {
  return (
    <>
      <div className=' pl-5 pr-5 mt-4 flex flex-col gap-10 md:gap-5 md:flex-row'>
        <div className="headline flex flex-col gap-5 md:w-11/12">
          <img src={ImgMob} alt="headline image" className='md:hidden' />
          <img src={ImgPc} alt="headline image" className='hidden md:flex' />
          <div className="h-contents flex flex-col gap-5 md:flex-row">
            <div className="h-title md:w-1/2 ">
              <h2 className='font-extrabold text-4xl md:text-5xl'>The Bright Future of Web 3.0?</h2>
            </div>
            <div className="h-desc flex flex-col items-start gap-5 md:gap-16 md:w-1/2">
              <p className='text-gray-blue text-xs leading-5'>
                We dive into the next evolution of the web that claims to put
                the power of the platform back into the hands of the people. But
                is it really fulfilling its promise?
              </p>
              <button className='bg-soft-red pt-3 pb-3 pl-8 pr-8 text-off-white font-normal text-xs tracking-widest'>READ MORE</button>
            </div>
          </div>
        </div>

        <div className="new bg-v-dark-blue flex flex-col gap-5 ">
          <h2 className='text-soft-orange pl-5 pt-5 font-extrabold text-3xl'>New</h2>
          <div className='pl-5 pr-5 flex flex-col gap-5'>
          <div className=' flex flex-col gap-2'>
            <h6 className='text-off-white font-extrabold'>Hydrogen VS Electric Cars</h6>
            <p className='text-gray-blue text-xs'>Will hydrogen-fueled cars ever catch up to EVs ?</p>
          </div>
          <hr />
          <div className=' flex flex-col gap-2'>
            <h6 className='text-off-white font-extrabold'>The Downside of AI Artistry</h6>
            <p className='text-gray-blue text-xs'>
              What are the possible adverse effects of on-demand AI image
              generation ?
            </p>
          </div>
          <hr />
          <div className='pb-5 flex flex-col gap-2'>
            <h6 className='text-off-white font-extrabold'>Is VC Funding Drying Up?</h6>
            <p className='text-gray-blue text-xs'>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
