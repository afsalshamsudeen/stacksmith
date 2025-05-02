import React, { useState } from 'react'
import styled from 'styled-components'
import "../GenerateProject/GenerateProject.css"
import DropdownMenu from '../DropDown';

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
const Wrapper  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 400px;
    height: auto;
    background-color: #1E293B;
    border-radius: 8px;
    padding: 20px;
    gap: 10px;

   
    h1{
        font-size: 1rem;
        color: #F8FAFC;
        font-weight: 500;
    }
`;

const Input = styled.input`
    width: 300px;
    outline: none;
    padding: 8px;
    background: transparent;
    color: #fff;
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
    const [ischecked, setIsChecked] = useState(false)
    const handleChange = (event) => {
        setSeclectedOption(event.target.value);

    }
    const handleSelect = (event) => {
        setSelectedFramework(event.target.value)
    }

    const handleCheck = (event) =>{
        setIsChecked(event.target.value)
    }
  return (
    <Container>
        <Wrapper>
            <h1>Project Name</h1>
            <Input placeholder='Enter your project name'></Input>
            <h1>Framework</h1>
            
            <Radiolabel>
                <RadioInput 
                    type='radio'
                    value='react'
                    checked = {selectedOption === 'react'}
                    onChange={handleChange}
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

            <h1>CSS Framework</h1>
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
            
            <h1>Icon Libraries</h1>
            <div className='flex-row items-start justify-center text-slate-50 '>
            <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="none"
                    checked= {ischecked === 'none'}
                    onChange={handleCheck}
                     />
                    None
                </label>
               
                <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="mui"
                    checked= {ischecked === 'mui'}
                    onChange={handleCheck}
                     />
                    Material UI
                </label>

                <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="hicon"
                    checked={ischecked === 'hicon'}
                    onChange={handleCheck}
                    />
                    Hero Icons
                </label>

                <label className='flex gap-5 cursor-pointer'>
                    <input className='flex gap-5 cursor-pointer'
                    type="checkbox"
                    value="fontawesome"
                    checked={ischecked === 'fontawesome'}
                    onChange={handleCheck}
                    />
                    Font Awesome
                </label>
            </div>
                <DropdownMenu/>
            <div className='flex flex-row justify-start w-full gap-4 mt-5'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600'>Generate Project</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600'>Download</button>
            </div>
        </Wrapper>
    </Container>
  )
}

export default GenerateProject
