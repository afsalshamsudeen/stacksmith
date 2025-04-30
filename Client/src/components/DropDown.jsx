import React, { useState } from 'react'

const fontMap = {
    robot: 'font-roboto',
    opensens : 'font-opensans',
    inter: 'font-inter',
   sansaction: 'font-sans',
   poppins: 'font-poppins',
   outfit: 'font-outfit'
}
const DropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (event) =>{
        setSelectedOption(event.target.value)
    };

  return (
    <div className='flex justify-start items-start bg-grey-100'>
        <div className='w-64'>
            <label htmlFor="options" className='block mb-2 text-base font-medium text-grey-700'>
                Google Font
            </label>
            <select
                id='options'
                value={selectedOption}
                onChange={handleChange}
                className='block w-80 px-3 py-2 border border-grey-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 cursor-pointer'
            >
                <option value="">Select font</option>
                <option value="robot" className='font-roboto'>Roboto</option>
                <option value="opensans" className='font-opensans'>Open Sans</option>
                <option value="inter" className='font-inter'>Inter</option>
                <option value="sansaction" className='font-sans'>Sansaction</option>
                <option value="poppins" className='font-poppins'>Poppins</option>
                <option value="outfit" className='font-outfit'>Outfit</option>
                <option value="Tagesschrift" className='font-Tagesschrift'>Tagesschrift</option>
            </select>
                {selectedOption && (
                <p className={`mt-3 text-gray-400 text-base ${fontMap[selectedOption] || 'font-sans'}`}>
                Selected Font: <span className="font-semibold capitalize">{selectedOption}</span>
                </p>
            )}
        </div>
    </div>
  )
}

export default DropdownMenu
