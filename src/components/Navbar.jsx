import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImGooglePlus3 } from 'react-icons/im';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { IoMdLogIn } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { IoIosCart } from 'react-icons/io';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between py-3 px-16  text-xl '>
        <div className='flex gap-4'>
          <FaFacebook className='cursor-pointer text-2xl' />
          <AiFillTwitterCircle className='cursor-pointer text-2xl' />
          <ImGooglePlus3 className='cursor-pointer text-2xl' />
          <TiSocialYoutube className='cursor-pointer text-2xl' />
          <TiSocialInstagram className='cursor-pointer text-2xl' />
        </div>
        <div className='flex gap-4'>
          <div className='flex gap-1 items-center cursor-pointer '>
            <IoMdLogIn className='text-orange-500' />
            <button>Log in</button>
          </div>
          <div className='flex gap-1 items-center cursor-pointer '>
            <MdAccountCircle className='text-orange-500' />
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className=' bg-custom-blue py-8 px-16 flex justify-between'>
        <img
          src='https://giveawaymarkets.com/images/logo.png'
          className='w-16'
        />
        <div className='flex items-center justify-center bg-white p-3 gap-2 w-fit rounded-md '>
          <select className=' px-3'>
            <option>State</option>
          </select>
          <select className=' px-3'>
            <option>State</option>
          </select>
          <input placeholder='Search' className='pl-2 pr-8 ' />
          <FaSearch />
        </div>
        <div className='flex gap-4 text-lg text-white'>
          <div className='flex gap-1 items-center cursor-pointer '>
            <IoIosCart className='text-orange-500 text-2xl' />

            <button>Cart</button>
            <span className=' bg-black text-white rounded-[50%] px-2 ml-1 bold text-base'>
              2
            </span>
          </div>
          <div className='flex gap-1 items-center cursor-pointer '>
            <FaClipboardCheck className='text-orange-500 text-2xl' />
            <button>Check Out</button>
          </div>
        </div>
      </div>
      <div className='bg-custom-sky py-2 px-16 flex justify-center items-center text-base text-black '>
        <div>
          <Dropdown>
            <Dropdown.Toggle className='border-none hover:text-red-400  bg-custom-sky text-black'  id="dropdown-basic">
            FOOD CUBOARD 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Grocery</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Noodle</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Pasta</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Flours & meals</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Spices</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tins and Cans</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Grain</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='cursor-pointer text-50'>HEALTHY AND BEAUTY</div>
        <div>
          <Dropdown>
            <Dropdown.Toggle className='border-none hover:bg-custom-sky text-black'  id="dropdown-basic">
            TOILETRIES 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Toilet paper & wipes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bathroom cleaners</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Soap</Dropdown.Item>
              <Dropdown.Item href="#/action-3">bath</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='cursor-pointer'>SNACKS</div>
        <div>
          <Dropdown>
            <Dropdown.Toggle className='border-none hover:bg-custom-sky text-black'  id="dropdown-basic">
            DRINKS 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Alcoholic drink</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Non alcoholic drink</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
