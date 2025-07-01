import React from 'react';
import premiumImg from '../assets/chooseUsIcon/premium.png';
import affordableImg from '../assets/chooseUsIcon/premium.png';
import easyReturnImg from '../assets/chooseUsIcon/premium.png';
import securePaymentImg from '../assets/chooseUsIcon/premium.png';
import chooseImg from '../assets/chooseUsIcon/chooseImg.jpg';
import returnImg from '../assets/chooseUsIcon/return.png';
import transactionImg from '../assets/chooseUsIcon/transaction.png';
import secureImg from '../assets/chooseUsIcon/secure.png';

function Choose() {
  return (
    <div className='h-170 w-full  px-8'>
      <div className='flex justify-center py-10'>
  <h1 className='font-bold text-5xl animate-bounce text-pink-600 text-center'>Why Choose Us!</h1>
</div>


      <div className='w-full h-140  flex'>
        {/* Left Section with Grid */}
        <div className='w-[65%] h-130  grid grid-cols-3 gap-8'>

          {/* 1. Premium Quality */}
          <div className='h-65 w-72  bg-[#7df6e7aa]   transition-transform duration-300 
          hover:bg-[#7df6e7aa] hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02]'>
            <div className='h-12 w-14 m-auto mt-4'><img src={premiumImg} alt="Premium Quality" /></div>
            <h1 className='font-bold text-2xl flex justify-center mt-2'>Premium Quality</h1>
            <p className='text-center mt-2'>
              We use high-grade fabrics <br />
              and fine craftsmanship to ensure <br />
              every piece feels <br />as good as it looks.
            </p>
          </div>

          {/* 4. Affordable Pricing */}
          <div className='h-65 w-72  bg-[#7df6e7aa] transition-transform duration-300  
          hover:bg-[#7df6e7aa] hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02]'>
            <div className='h-10 w-12 m-auto mt-4'><img src={transactionImg} alt="Affordable Pricing" /></div>
            <h1 className='font-bold text-2xl flex justify-center mt-4'>Affordable Pricing</h1>
            <p className='text-center mt-2'>
              Style shouldn’t break <br />the bank. We offer <br />
              trendy clothing at prices <br />that make sense.
            </p>
          </div>

          {/* 6. Easy Returns */}
          <div className='col-span-2 h-57  bg-[#7df6e7aa]  transition-transform duration-300 
         hover:bg-[#7df6e7aa] hover:opacity-90 hover:text-black hover:shadow-xl hover:scale-[1.02]'>
            <div className='h-12 w-14 m-auto mt-4'><img src={returnImg} alt="Easy Returns" /></div>
            <h1 className='text-2xl font-bold flex justify-center mt-4'>Easy Returns</h1>
            <p className='flex justify-center mt-5 text-center'>
              Changed your mind? No worries! <br />
              Enjoy a hassle-free return and <br />
              exchange policy designed for your ease.
            </p>
          </div>

          {/* 7. Secure Payments */}
          <div className='row-start-1 row-end-3  bg-[#7df6e7aa]  border-b-blue-500 transition-transform duration-400
           hover:shadow-xl hover:scale-[1.02] hover:bg-[#7df6e7aa] hover:opacity-90 hover:text-black'>
            <div className='h-14 w-16 mt-4 m-auto'><img src={secureImg} alt="Secure Payments" /></div>
            <h1 className='text-2xl font-bold flex justify-center mt-4'>Secure Payments</h1>
            <p className='flex justify-center mt-3 text-center'>
              Your transactions are safe <br />
              with us, thanks to trusted and <br />
              encrypted payment gateways.
            </p>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>Cash on Delivery:
              <p className='font-normal text-[13px]'>Pay when your order arrives at your doorstep.</p>
            </h4>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>Credit/Debit Cards:
              <p className='font-normal text-[13px]'>Fast, reliable payments using Visa, MasterCard & more.</p>
            </h4>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>Net Banking:
              <p className='font-normal text-[13px]'>Direct bank transfers with top Indian banks.</p>
            </h4>
            <h4 className='text-left pl-10 pt-2 text-[18px] font-bold'>UPI:
              <p className='font-normal text-[13px]'>Simple, instant payments using your UPI ID (Google Pay, PhonePe, Paytm).</p>
            </h4>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-[35%] h-130  ml-12'>
          <img src={chooseImg} alt="Choose Us" className='h-130 w-full' />
        </div>
      </div>
    </div>
  );
}

export default Choose;
