import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImGooglePlus3 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <section>
      <div className='bg-footer text-white pt-5 px-[80px]'>
        <div className='flex justify-around border-dotted border-b-2 border-white'>
          <div className='mb-5'>
            <div className='border-dotted border-b-2 border-white'>
              <p className='text-white text-2xl py-5'>Follow Us on</p>
              <div className='flex gap-4 pb-10 '>
                <FaFacebook className='cursor-pointer text-2xl' />
                <AiFillTwitterCircle className='cursor-pointer text-2xl' />
                <ImGooglePlus3 className='cursor-pointer text-2xl' />
                <TfiYoutube className='cursor-pointer text-2xl' />
                <TiSocialInstagram className='cursor-pointer text-2xl' />
              </div>
            </div>
            <ul className='text-white text-base flex flex-col gap-1 py-5'>
              <li className='hover:text-blue-500 cursor-pointer w-fit'>Home</li>
              <li className='hover:text-blue-500 cursor-pointer w-fit'>
                Shops
              </li>
            </ul>
          </div>

          <div className=' mb-5  border-dotted border-l-2 border-white'>
            <div className='pl-5 gap-3 pb-3 flex flex-col'>
              <div>
                <p className='text-white text-2xl pt-5 '>About Us</p>
                <ul className='text-white text-base flex flex-col gap-1 py-1'>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    Who we are
                  </li>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    Contact Us
                  </li>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    FAQ
                  </li>
                </ul>
              </div>
              <div>
                <p className='text-white text-2xl '>
                  Buying on GiveAwayMarkets
                </p>

                <ul className='text-white text-base flex flex-col gap-1 py-1'>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    My Orders
                  </li>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    My Cart
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=' mb-5 border-dotted border-l-2 border-white'>
            <div className='pl-5  gap-3 flex flex-col'>
              <div>
                <p className='text-white text-2xl pt-5 '>Vendors</p>
                <ul className='text-white text-base flex flex-col gap-1 py-1'>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    Dashboard
                  </li>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    Sell with GiveAwayMarkets
                  </li>
                </ul>
              </div>
              <div>
                <p className='text-white text-2xl '>Legal</p>
                <ul className='text-white text-base flex flex-col gap-1 py-1'>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    Privacy Policy
                  </li>
                  <li className='hover:text-blue-500 cursor-pointer w-fit'>
                    Terms and Conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-white bg-black w-full flex justify-center py-3'>
        giveawaymarkets.com © 2024. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
