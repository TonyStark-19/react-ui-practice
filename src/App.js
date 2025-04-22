// css
import './App.css';

// react icons
import { FiMenu } from "react-icons/fi";
import { IoIosGlobe, IoIosStar } from "react-icons/io";
import { FaRegUser, FaSearch } from "react-icons/fa";

// main page 
export default function HomePage() {
  return (
    <div className='container'>
      <Navbar />
      <BelowNavbar />
      <Content />
    </div>
  )
}

// navbar
function Navbar() {
  return (
    <div className='navbar'>

      <div className='head'>
        <FiMenu className='menu-icon' />
        <img className='logo' src='/images/logo.png' alt='logo' />
      </div>

      <div className='links'>
        <FaSearch className='links-icon' />
        <IoIosGlobe className='links-icon globe' />
        <FaRegUser className='links-icon' />
      </div>
    </div>
  )
}

// div below navbar
function BelowNavbar() {
  return (
    <div className='below-navbar'>
      <h4>Feeling spontaneous?!</h4>
      <h6>Save on <a href='#'>trips departing soon</a></h6>
    </div>
  )
}

// content of home section
function Content() {
  return (
    <div className='content-container'>

      <div className='text-content'>

        <div className='rating'>
          <p>Excellent</p>

          <div className='stars'>

            <div className='star-wrap'>
              <IoIosStar className='star-icon' />
            </div>
            <div className='star-wrap'>
              <IoIosStar className='star-icon' />
            </div>
            <div className='star-wrap'>
              <IoIosStar className='star-icon' />
            </div>
            <div className='star-wrap'>
              <IoIosStar className='star-icon' />
            </div>
            <div className='star-wrap'>
              <IoIosStar className='star-icon' />
            </div>

          </div>

          <div className='rating-o'>
            <IoIosStar className='star-icon-o' />
            <p>Trustpilot</p>
          </div>

        </div>

        <div className='main-heading'>
          <h1>Do wild things</h1>
        </div>

        <div className='sub-heading'>
          <h4>Join solo-friendly, expert-led, outdoor adventures</h4>
        </div>

        <button className='content-btn'>View all adventures</button>

      </div>

      <div className='adventures'>

        <div className='adventures-options'>

          <div className='adventures-option-box'>
            <h4>Destinations</h4>
          </div>

          <div className='adventures-option-box'>
            <h4>Activities</h4>
          </div>

          <div className='adventures-option-box'>
            <h4>Collections</h4>
          </div>

        </div>

        <div className='destination'>

          <div className='destination-box1'>
            <div className='destination-name'>europe</div>
          </div>

          <div className='destination-box2'>
            <div className='destination-name'>Asia</div>
          </div>

          <div className='destination-box3'>
            <div className='destination-name'>africa</div>
          </div>

          <div className='destination-box4'>
            <div className='destination-name'>south america</div>
          </div>

          <div className='destination-box5'>
            <div className='destination-name'>north america</div>
          </div>

          <div className='destination-box6'>
            <div className='destination-name'>central america</div>
          </div>

          <div className='destination-box7'>
            <div className='destination-name'>oceania</div>
          </div>

        </div>

      </div>

    </div>
  )
}