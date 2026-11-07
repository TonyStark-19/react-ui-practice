// react icons
import { FiMenu } from "react-icons/fi";
import { IoIosGlobe } from "react-icons/io";
import { FaRegUser, FaSearch } from "react-icons/fa";

// navbar
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='head'>
                <FiMenu className='menu-icon' />
                <img className='logo' src='/images/logo/logo.png' alt='logo' />
            </div>

            <div className='links'>
                <FaSearch className='links-icon' />
                <IoIosGlobe className='links-icon globe' />
                <FaRegUser className='links-icon' />
            </div>
        </div>
    )
}