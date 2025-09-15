
import logo from "../assets/layers.png";

const NavBar = () => {
  return (
    <div className='sticky top-0 z-[100]'>
      <div className='flex flex-1 items-center justify-center w-full m-0 auto px-10 py-4 text-white gap-3 cursor-pointer md:justify-start '>
        <img className='h-4 w-auto md:h-7 md:w-auto' src={logo}/>
        <h2 className='text-lg font-poppins font-bold'>Stack Smith</h2>
      </div>
    </div>
  )
}

export default NavBar
