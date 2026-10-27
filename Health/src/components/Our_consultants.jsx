import React from 'react'
import dr1 from "../assets/dr1.jpg";
import dr2 from "../assets/dr2.webp";
import dr3 from "../assets/dr3.png";

const Our_consultants = () => {

    const doctor_details = [
        {
            name: "John Johnson",
            position: "Position Here",
            pt1: "Lorem ipsum, dolor sit amet",
            pt2: "consectetur adipisicing elit.",
            pt3: "Harum, dignissimos veritatis ",
            img: dr1
        },
        {
            name: "Robert William",
            position: "Position Here",
            pt1: "Lorem ipsum, dolor sit amet",
            pt2: "consectetur adipisicing elit.",
            pt3: "Harum, dignissimos veritatis ",
            img: dr2
        },
        {
            name: "Linda Brown",
            position: "Position Here",
            pt1: "Lorem ipsum, dolor sit amet",
            pt2: "consectetur adipisicing elit.",
            pt3: "Harum, dignissimos veritatis ",
            img: dr3
        }
    ]

  return (
      <div id='Consultents' className='flex flex-col justify-center items-center gap-20'>
          <div className='flex flex-col gap-20 justify-center items-center text-center '>
              <h1 className='text-6xl font-bold'>Our Consultants</h1>
              <div className='flex gap-10 justify-center items-center text-start'>
                  {doctor_details.map((item, index) =>
                      <div key={index} className='flex flex-col gap-2'>
                          <img className='w-80 h-90  rounded-2xl border-1' src={item.img} alt="" />
                          <h1 className='  font-bold text-2xl'>{item.name}</h1>
                          <p className='text-black/50'>{item.position}</p>
                          <ul className='list-disc list-inside space-y-1'>
                            <li>{item.pt1}</li>
                            <li>{item.pt2}</li>
                            <li>{item.pt3}</li>
                          </ul>
                </div>
                )}
              </div>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center py-10 px-10 rounded-4xl  h-1/4g bg-gray-300/50 w-2/4 text-center'>
              <h1 className='text-4xl font-bold'>Book a Consultant</h1>
              <p className='text-black/50'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam architecto error, natus totam minus molestias, iste corrupti velit eaque illum repellendus iusto similique non id minima est. Veritatis, consequuntur. lorem</p>
              <div className='flex gap-5 text-center'>
                  <button className='rounded-2xl bg-black px-3 py-1.5 text-white'>LEARN MORE</button>
                  <button className='rounded-2xl bg-cyan-500 px-3 py-1.5 text-white'>BOOK NOW</button>
              </div>
          </div>
    </div>
  )
}

export default Our_consultants
