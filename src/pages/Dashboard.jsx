import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <section>
      {/* <div className="flex">
        <div className="flex flex-cols-4">className="flex-col-4"</div>
        <div className="flex flex-cols-6">className="flex-col-6"</div>
      </div> */}
      <div className="flex">
        <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
          <img
            src='https://giveawaymarkets.com/docs/thumb/1606993114_Badia%20Organic%20Cinnamon%20Powder.jpg'
            className='w-[380px] h-[200px]'
            alt='box'
          />
        </div>
        <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
          <img
            src='https://giveawaymarkets.com/docs/thumb/1606993114_Badia%20Organic%20Cinnamon%20Powder.jpg'
            className='w-[380px] h-[200px]'
            alt='box'
          />
        </div>
        <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
          <img
            src='https://giveawaymarkets.com/docs/thumb/1606993114_Badia%20Organic%20Cinnamon%20Powder.jpg'
            className='w-[380px] h-[200px]'
            alt='box'
          />
        </div>
        <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
          <img
            src='https://giveawaymarkets.com/docs/thumb/1606993114_Badia%20Organic%20Cinnamon%20Powder.jpg'
            className='w-[380px] h-[200px]'
            alt='box'
          />
        </div>
      </div>

      <p className='flex justify-center text-3xl font-semibold pt-5'>
        NEW ARRIVALS
      </p>
      <Carousel
        wrap={true}
        className='flex justify-between h-[350px] mx-2 mt-10 bg-promo'>
        <Carousel.Item className=' '>
          <div className='flex mx-[9%]'>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/thumb/1606993114_Badia%20Organic%20Cinnamon%20Powder.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='	https://giveawaymarkets.com/docs/normal/1606993182_Ayoola-Poundo-Yam.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='	https://giveawaymarkets.com/docs/thumb/1606995665_Viva%20Naturals%20Psyllium%20Husk%20Powder.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/thumb/1606994826_Nestle%20Golden%20Morn%20-%201kg.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
          </div>
          <Carousel.Caption>
            <p className='hidden'>First slide label</p>
            <p className='hidden'>
              Some representative placeholder content for the first slide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=' '>
          <div className='flex mx-[9%]'>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/thumb/1606993638_Apple.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/thumb/1606991777_5alive.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='	https://giveawaymarkets.com/docs/thumb/1607091035_Elliott%20Elliot%20Rum%20(Dark%20Rum)%204k.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/thumb/1606995041_red%20grape.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
          </div>
          <Carousel.Caption>
            <p className='hidden'>First slide label</p>
            <p className='hidden'>
              Some representative placeholder content for the first slide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className=' '>
          <div className='flex mx-[9%]'>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/thumb/1606992721_22.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/normal/1606995132_titus.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/normal/1606995132_titus.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
            <div class='flex h-[300px] text-center mx-2 py-0 px-10 overflow-hidden border border-solid border-gray-300 rounded-lg bg-gray-50 shadow-md'>
              <img
                src='https://giveawaymarkets.com/docs/normal/1606995132_titus.jpg'
                className='w-[380px] h-[200px]'
                alt='box'
              />
            </div>
          </div>
          <Carousel.Caption>
            <p className='hidden'>First slide label</p>
            <p className='hidden'>
              Some representative placeholder content for the first slide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='flex justify-center pt-5 gap-4'>
        <div className='bg-promo h-[200px] text-center p-[30px]'>
          <p className='text-[24px] mt-[20px] mb-[10px] font-medium '>
            Shop at half price
          </p>
          <p className='pt-[20px] text-[14px]  font-medium w-[90%] '>
            Buy about to expire item at a very cheap price
          </p>
        </div>
        <div className='bg-promo h-[200px] text-center p-[30px]'>
          <p className='text-[24px] mt-[20px] mb-[10px] font-medium '>
            Our Vendors
          </p>
          <p className='pt-[20px] text-[14px]  font-medium w-[90%] '>
            Someone needs it, don't let the goods expire
          </p>
        </div>
        <div className='bg-promo h-[200px] text-center p-[30px]'>
          <p className='text-[24px] mt-[20px] mb-[10px] font-medium '>Promo</p>
          <p className='pt-[20px] text-[14px]  font-medium w-[90%] '>
            Discount for new product or promo products here!!!
          </p>
        </div>
      </div>
      <div>
        <p className='flex justify-center text-3xl font-semibold pt-5'>
          OUR TOP VENDORS
        </p>
        <div className='flex gap-10 py-3 justify-center '>
          <img
            className='rounded-md w-[27%]  '
            src='https://giveawaymarkets.com/docs/thumb/1635441586log.JPG'
            alt='aaaaaaaaaa'
          />
          <img
            className='rounded-md w-[27%]  '
            src='https://giveawaymarkets.com/docs/thumb/1606999874Stop%20&%20Shop%20MASS.jpg'
            alt='sssssssss'
          />
          <img
            className='rounded-md w-[27%]  '
            src='https://giveawaymarkets.com/docs/thumb/1635441586log.JPG'
            alt='aaaaaaaaaa'
          />
        </div>
        <p className='flex justify-center text-3xl font-semibold  py-5'>
          SHOP BY CATEGORIES
        </p>
        <p className='flex justify-center text-3xl font-semibold py-5'>
          BLOGS/UPDATES
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
