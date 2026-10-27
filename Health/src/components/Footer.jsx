import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='flex gap-10 justify-between bg-black text-white px-40 py-5 '>
        <div className='' >
            <ul className='flex flex-col gap-2'>
                <li className='flex gap-2' > <Phone size={20} color="#3b82f6" strokeWidth={2} />  <p>+00 123 73679493</p></li>
                <li className='flex gap-2'><Mail color="#3b82f6" size={20} strokeWidth={2} /> <p>User@gmail.com</p></li>
                <li className='flex gap-2'>  <MapPin color="#3b82f6" size={20} strokeWidth={2} /> <p>123 Street Name City</p></li>
            </ul>
        </div>
          <div className='flex flex-col gap-2'>
              <p>Reviews</p>
              <p>community</p>
              <p>Terms of Service</p>
        </div>
          <div className='flex flex-col-reverse gap-2'>
              <p>UNSUBSCRIBE  |  PRIVACY POLICY  |  WEB</p>
        </div>
    </footer>
  )
}

export default Footer
