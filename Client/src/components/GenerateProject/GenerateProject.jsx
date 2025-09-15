import React, { useState } from 'react'
import "../GenerateProject/GenerateProject.css"
import DropdownMenu from '../DropDown';
import axios from 'axios';






const DropDownContext = React.createContext({
    open: 'false',
    setOpen:() =>{}
})

const GenerateProject = () => {

    const [selectedOption, setSeclectedOption] = useState(false)
    const [selectedFramework, setSelectedFramework] = useState(false)
    const [projectName, setProjectName] = useState('');
    const [selectedIcons, setSelectedIcons] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    
    const handleChange = (event) => {
        setSeclectedOption(event.target.value);

    }
    const handleSelect = (event) => {
        setSelectedFramework(event.target.value)
    }

    const handleCheck = (event) =>{
        const {value, checked } = event.target;
        
        setSelectedIcons((prev )=>
            checked ? [...prev, value] : prev.filter((icon) => icon !== value)
        )
    }

    const generateProject = async (config) => {
        const response = await axios.post(`${API_KEY}api/projects/generate`, config, {
          responseType: 'blob', // Important! So browser knows it’s a binary file
        });
      
        const blob = new Blob([response.data], { type: 'application/zip' });
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${config.projectName}.zip`;
        link.click();
        window.URL.revokeObjectURL(downloadUrl);
      };
      

  return (
    <div className='flex flex-col items-center justify-center mt-12 '>
        <div className='flex flex-col justify-start h-auto w-80 p-6 gap-3 m-4  bg-[#1E2938]  shadow-xl shadow-cyan-600 rounder-xl md:h-auto md:w-200 md:p-10 md:gap-3 md:m-8'>

            <h1 className='text-sm text-[#F8FAFC] font-medium md:text-2xl'>Project Name</h1>
            <input 
            className='w-auto outline-none p-2 bg-transparent text-white rounded-[3px] border border-[#121825] shadow-none'
            placeholder='Enter your project name'
            value={projectName}
            onChange={(e)=> setProjectName(e.target.value)}
                ></input>

            <h1 className='text-lg text-[#F8FAFC] font-medium mt-6'>Framework</h1>
            
            <label className='flex items-center flex-row gap-[5px] text-[#F8FAFC]'>
                
                <input 
                    type='radio'
                    value='react'
                    checked = {selectedOption === 'react'}
                    onChange={handleChange}
                    className="cursor-pointer bg-transparent appearance-none shadow-none border border-[#121825] rounded-full w-4 h-4 relative checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-2 checked:before:h-2 checked:before:bg-[#636363] checked:before:rounded-full"
                />
                React JS

                <input 
                className="cursor-pointer bg-transparent appearance-none shadow-none border border-[#121825] rounded-full w-4 h-4 relative checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-2 checked:before:h-2 checked:before:bg-[#636363] checked:before:rounded-full"
                    type='radio'
                    value='flutter'
                    checked = {selectedOption === 'flutter'}
                    onChange={handleChange}
                />
                Flutter

                <input
                    className="cursor-pointer bg-transparent appearance-none shadow-none border border-[#121825] rounded-full w-4 h-4 relative checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-2 checked:before:h-2 checked:before:bg-[#636363] checked:before:rounded-full" 
                    type='radio'
                    value='next'
                    checked = {selectedOption === 'next'}
                    onChange={handleChange}
                />
                Next JS

                <input
                    className="cursor-pointer bg-transparent appearance-none shadow-none border border-[#121825] rounded-full w-4 h-4 relative checked:before:content-[''] checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:w-2 checked:before:h-2 checked:before:bg-[#636363] checked:before:rounded-full" 
                    type='radio'
                    value='vue'
                    checked = {selectedOption === 'vue'}
                    onChange={handleChange}
                />
                Vue JS
            </label>

            <h1 className='text-lg text-[#F8FAFC] font-medium mt-6'>CSS Framework</h1>
            <div className='flex flex-col items-start gap-2 text-slate-50'>
            <label
                 className="flex items-center gap-[5px] text-[#F8FAFC]"
            >
            <input 
                    className="
                            cursor-pointer bg-transparent appearance-none shadow-none 
                            border border-[#121825] rounded-full w-4 h-4 relative
                            checked:before:content-[''] checked:before:absolute 
                            checked:before:top-[3px] checked:before:left-[3px] 
                            checked:before:w-2 checked:before:h-2 
                            checked:before:bg-[#636363] checked:before:rounded-full
                        " 
                    type='radio'
                    value='none'
                    checked = {selectedFramework === 'none'}
                    onChange={handleSelect}
                />
                None
            </label>

            <label
             className="flex items-center gap-[5px] text-[#F8FAFC]">
            <input
                     className="
                            cursor-pointer bg-transparent appearance-none shadow-none 
                            border border-[#121825] rounded-full w-4 h-4 relative
                            checked:before:content-[''] checked:before:absolute 
                            checked:before:top-[3px] checked:before:left-[3px] 
                            checked:before:w-2 checked:before:h-2 
                            checked:before:bg-[#636363] checked:before:rounded-full
                        "  
                    type='radio'
                    value='tailwind'
                    checked = {selectedFramework === 'tailwind'}
                    onChange={handleSelect}
                />
                Tailwind
            </label>

            <label
             className="flex items-center gap-[5px] text-[#F8FAFC]">
            <input
                className="
                            cursor-pointer bg-transparent appearance-none shadow-none 
                            border border-[#121825] rounded-full w-4 h-4 relative
                            checked:before:content-[''] checked:before:absolute 
                            checked:before:top-[3px] checked:before:left-[3px] 
                            checked:before:w-2 checked:before:h-2 
                            checked:before:bg-[#636363] checked:before:rounded-full
                        "  
                    type='radio'
                    value='styled'
                    checked = {selectedFramework === 'styled'}
                    onChange={handleSelect}
                />
                Styled componets
            </label>

            <label
             className="flex items-center gap-[5px] text-[#F8FAFC]">
            <input
                    className="
                            cursor-pointer bg-transparent appearance-none shadow-none 
                            border border-[#121825] rounded-full w-4 h-4 relative
                            checked:before:content-[''] checked:before:absolute 
                            checked:before:top-[3px] checked:before:left-[3px] 
                            checked:before:w-2 checked:before:h-2 
                            checked:before:bg-[#636363] checked:before:rounded-full
                        "  
                    type='radio'
                    value='bootstrap'
                    checked = {selectedFramework === 'bootstrap'}
                    onChange={handleSelect}
                />
                Bootstrap
            </label>
            </div>
            
            <h1 className='text-lg text-[#F8FAFC] font-medium mt-6'>Icon Libraries</h1>
            <div className='flex-row items-start justify-center text-slate-50 '>
            <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="none"
                    checked= {selectedIcons.includes('none') }
                    onChange={handleCheck}
                     />
                    None
                </label>
               
                <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="mui"
                    checked= {selectedIcons.includes('mui')}
                    onChange={handleCheck}
                     />
                    Material UI
                </label>

                <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="hicon"
                    checked={selectedIcons.includes('hicon')}
                    onChange={handleCheck}
                    />
                    Hero Icons
                </label>

                <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="fontawesome"
                    checked={selectedIcons.includes('fontawesome') }
                    onChange={handleCheck}
                    />
                    Font Awesome
                </label>
            </div>
                <DropdownMenu/>
            <div className='flex flex-row justify-center w-full gap-4 mt-8'>
                <button onClick={()=> generateProject({
                    projectName,
                    framework: selectedOption,
                    css: selectedFramework,
                    icons: selectedIcons,
                })} className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600 '>Generate Project</button>
                
            </div>
        
        </div>
    </div>
  )
}

export default GenerateProject
