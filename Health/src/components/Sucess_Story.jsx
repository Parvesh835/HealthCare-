import React from 'react'
import dr1 from '../assets/doctor1.jpg'
import dr2 from '../assets/doctor2.jpg'
import dr3 from '../assets/doctor3.jpg'

const Sucess_Story = () => {

    const success_Story = [
        {
            name: "Artful Dodger",
            position: "Positon Here",
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa perferendis aliquam iusto eveniet laudantium tenetur inventore, nulla consectetur",
        img: dr1
        },
        {
            name: "Michael Brown",
            position: "Positon Here",
          story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa perferendis aliquam iusto eveniet laudantium tenetur inventore, nulla consectetur",
        img: dr2
      },
      {
            name: "Mary Smith",
            position: "Positon Here",
        story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa perferendis aliquam iusto eveniet laudantium tenetur inventore, nulla consectetur",
        img: dr3
        }
    ]

  return (
    <div className='flex flex-col pt-20 gap-15 justify-center items-center'>
      <h1 className='text-6xl font-bold'>Success Story</h1>
      <div className='flex gap-10x justify-center items-center'>
        {
          success_Story.map((item, index) =>
            <div className='flex flex-col gap-3 justify-center items-center text-center'>
              <img src={item.img} alt="" className='rounded-full w-50' />
              <h1 className='text-2xl font-bold'>{item.name}</h1>
              <p className='text-black/50'>{item.position}</p>
              <p className='w-80'>{item.story}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Sucess_Story
