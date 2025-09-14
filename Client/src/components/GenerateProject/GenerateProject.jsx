import React, { useState } from 'react'
import styled from 'styled-components'
import "../GenerateProject/GenerateProject.css"
import DropdownMenu from '../DropDown';
import axios from 'axios';


const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
const Wrapper  = styled.div`
   

   
   
`;

const Input = styled.input`
    width: auto;
    outline: none;
    padding: 8px;
    background: transparent;
    color: #ffff;
    border-radius: 3px;
    border: 1px solid #121825;
    box-shadow: none;
`;

const Radiolabel = styled.label`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    color: #F8FAFC;
    
`;
const RadioInput = styled.input`
    cursor: pointer;
    background-color: transparent;
    appearance: none;
    box-shadow: none;
    accent-color: #3B82F6;
    border: 1px solid #121825;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    position: relative;

  &:checked::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    background-color: #636363;
    border-radius: 50%;
  }
`;

const CSSFrameworkLabel = styled.label`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    color: #F8FAFC;
    
`;

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
    <Container >
        <div className='flex flex-col justify-items-start h-auto w-200 p-10 gap-3 m-8  bg-[#1E2938]  shadow-xl shadow-cyan-600 rounder-xl'>

            <h1 className='text-2xl text-[#F8FAFC] font-medium'>Project Name</h1>
            <Input
            placeholder='Enter your project name'
            value={projectName}
            onChange={(e)=> setProjectName(e.target.value)}
                ></Input>

            <h1 className='text-lg text-[#F8FAFC] font-medium mt-6'>Framework</h1>
            
            <Radiolabel>
                <RadioInput 
                    type='radio'
                    value='react'
                    checked = {selectedOption === 'react'}
                    onChange={handleChange}
                    className='w-5 h-5 text-purple-400 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none checked:ring-2 checked:ring-purple-500'
                />
                React JS

                <RadioInput 
                    type='radio'
                    value='flutter'
                    checked = {selectedOption === 'flutter'}
                    onChange={handleChange}
                />
                Flutter

                <RadioInput 
                    type='radio'
                    value='next'
                    checked = {selectedOption === 'next'}
                    onChange={handleChange}
                />
                Next JS

                <RadioInput 
                    type='radio'
                    value='vue'
                    checked = {selectedOption === 'vue'}
                    onChange={handleChange}
                />
                Vue JS
            </Radiolabel>

            <h1 className='text-lg text-[#F8FAFC] font-medium mt-6'>CSS Framework</h1>
            <div className='flex flex-col items-start gap-2 text-slate-50'>
            <CSSFrameworkLabel>
            <RadioInput 
                    type='radio'
                    value='none'
                    checked = {selectedFramework === 'none'}
                    onChange={handleSelect}
                />
                None
            </CSSFrameworkLabel>

            <CSSFrameworkLabel>
            <RadioInput 
                    type='radio'
                    value='tailwind'
                    checked = {selectedFramework === 'tailwind'}
                    onChange={handleSelect}
                />
                Tailwind
            </CSSFrameworkLabel>

            <CSSFrameworkLabel>
            <RadioInput 
                    type='radio'
                    value='styled'
                    checked = {selectedFramework === 'styled'}
                    onChange={handleSelect}
                />
                Styled componets
            </CSSFrameworkLabel>

            <CSSFrameworkLabel>
            <RadioInput 
                    type='radio'
                    value='bootstrap'
                    checked = {selectedFramework === 'bootstrap'}
                    onChange={handleSelect}
                />
                Bootstrap
            </CSSFrameworkLabel>
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
    </Container>
  )
}

export default GenerateProject
