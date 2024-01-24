import React, { useState } from 'react'
import BirthdayData from '../data/BirthdayData'

const Birthday = () => {
    let [birthdayData,setBirthdayData]=useState(BirthdayData)


    let clearAll=()=>
    {
        setBirthdayData([])
    }

  return (
    <section className="mx-auto w-[90vw] max-w-[500px] bg-white p-6 shadow-xl rounded-md my-6 md:my-20 md:p-8">
      <h2 className="text-3xl">{birthdayData.length} Birthdays Today</h2>
      {birthdayData.map((birthday) => {
        let { id, name, age, image } = birthday;
        return (
          <article role='card' key={id} className="flex my-6">
            <img
              src={image}
              alt=""
              className="w-[75px] h-[75px] object-cover rounded-full shadow-md"
            />
            <div className="starboard flex justify-center flex-col ml-4">
              <h2 className="font-medium text-xl tracking-wide">{name}</h2>
              <p className="text-gray-500">{age} Years</p>
            </div>
          </article>
        );
      })}
      <button
        onClick={clearAll}
        role='clear-btn'
        className={`bg-pink-500 w-full py-1 rounded-md text-white font-normal cursor-pointer tracking-wide ${birthdayData.length===0?'mt-4':'mt-2'}`}
      >
        Clear All
      </button>
    </section>
  )
}

export default Birthday