import {RiDvdLine} from 'react-icons/ri'
const Navbar = () => {
  return (
    <nav className=" flex items-center my-5 mx-5 text-indigo-600 gap-x-1">
        <RiDvdLine className='h-10 w-10'/>
    <span className="text-xl ">Company SAS</span>
    </nav>
  )
}

export default Navbar