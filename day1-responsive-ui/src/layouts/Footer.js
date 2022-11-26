import React from 'react'

const Title = ({ children }) => <h3 className='text-medium font-bold my-3'>{children}</h3>


export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-6 text-sm 
     md:flex md:flex-wrap md:gap-3 md:justify-between
     md:py-12 md:px-32"
    >
      <div className='flex-auto'>
        <Title>Customer Center</Title>
        <div>
          <span>070-2707-1234 <br />
            Weekdays 09:30 - 18:00 <br className='hidden md:inline-block' /> <span className='md:hidden inline-block' >/</span> Weekends 12:00 - 13:00 <br />
            Holidays: Sat, Sun, National holidays
          </span>
        </div>
      </div>
      <div className='flex-auto'>
        <Title>Shippment Info</Title>
        <span>
          Track Shipping Location <br />
          Refund/exchange address <br className='hidden md:inline-block' /> <span className='md:hidden inline-block' >:</span>
          Incheon Gaeyanggu Gesangdong <br className='hidden md:inline-block' />
          GeyangBG #1117 <br />
          (Please make sure to <br className='hidden md:inline-block' />
          use Post Office Parcel service)
        </span>
      </div>
      <div className='flex-auto'>
        <Title>Company</Title>
        <span>Company info / Notice / Event</span>
      </div>
      <div className='flex-auto'>
        <Title>Social media</Title>
        <span className="flex gap-4 h-8">
          <img src={process.env.PUBLIC_URL + "ig.png"} alt="social media link" />
          <img src={process.env.PUBLIC_URL + "yt.png"} alt="social media link" />
          <img src={process.env.PUBLIC_URL + "fb.png"} alt="social media link" />
          <img src={process.env.PUBLIC_URL + "pt.png"} alt="social media link" />
        </span>
      </div>
      <div className='relative py-6 w-full'><hr className='absolute -left-6 md:-left-32 w-screen overflow-hidden' /> </div>
      <span className='md:text-center'>
        CEO : Honggildong │ Company Name : Needesign │ Tel : 070-123-1234 │ fax : 02-123-4567 │ E-mail : email@email.com │ address : S.Korea Seoul Mapogu Maporo 12 JayBG #201
        Business License Number : 123-45-78910 │ Technical Manager : Honggildong  <br className='hidden md:inline-block' />
        ⓒ 2020 JDESIGN All rights reserved. │ Privacy Policy │ Terms of Service
      </span>
    </footer>
  )
}
