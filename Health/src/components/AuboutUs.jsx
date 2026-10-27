import React from 'react'
import Nutri from "../assets/Nutri.jpg";
import brain from "../assets/brain.webp";
import stress from "../assets/stress.jpg";
import fitness from "../assets/fitness.jpg";

const AuboutUs = () => {

    const About_us = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam autem ab laudantium nisi quae voluptas animi, magnam dolor perferendis iste. Doloribus obcaecati minima dolorum. Tenetur veniam repudiandae dolorem doloribus! Veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor rem provident fugiat inventore numquam ad ut ex! Atque tenetur omnis dolorum aliquid, voluptas voluptatem aspernatur blanditiis eos maiores exercitationem fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae veniam blanditiis incidunt quos molestias accusamus quam vel dolores voluptatem nulla, sunt facilis illum. Exercitationem aut ex officiis quidem quisquam."

    const our_Services = [
        {
            title: "Nutrition Consultation",
            about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            img: Nutri
        },
        {
            title: "Mental Health Consultation",
            about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            img: brain
        },
        {
            title: "Fitness Program Consultation",
            about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            img: fitness
        },
        {
            title: "Stress Managment Consultation",
            about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            img: stress
        }
    ]

  return (
    <div className='p-20 flex flex-col justify-center items-center gap-20'>
          <div className='flex flex-col gap-10 justify-center items-center'>
              <hr/>
              <h1 className='text-6xl font-sans font-bold'>Story About Us</h1>
              <p className='px-25 text-center text-lg text-black/80'>{About_us}</p>
              <button className='px-3.5 py-2 rounded-xl text-white bg-blue-700'>LEARN MORE</button>
          </div>
          <div id='Service' className='px-20 h-screen text-center flex flex-col justify-center gap-20'>
              <h1 className='text-6xl font-sans font-bold'>Our Services</h1>
              <div className='flex justify-center items-center gap-5'>
              {our_Services.map((iteam, index) =>
                  <div className='flex flex-col justify-center items-center gap-5'>
                      <img src={iteam.img} alt="" className='w-60 rounded-full border-1 object-scale-down' />
                      <h1 className='text-3xl'>{iteam.title}</h1>
                      <p className='text-lg te'>{iteam.about}</p>
                  </div>
                  )}
              </div>
          </div>
    </div>
  )
}

export default AuboutUs
