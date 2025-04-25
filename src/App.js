// css
import './App.css';

// react icons
import { FiMenu } from "react-icons/fi";
import { IoIosGlobe, IoIosStar } from "react-icons/io";
import { FaRegUser, FaSearch, FaStar } from "react-icons/fa";

// main page 
export default function HomePage() {
  return (
    <div className='container'>
      <Navbar />
      <BelowNavbar />
      <Content />
      <Level />
      <Reviews />
      <Adventure />
      <FeatureCollage />
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

      <div className='video-background'>
        <video autoPlay muted loop playsInline>
          <source src='/video/adventure.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

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

          <div className='adventures-option-box' id='box1'>
            <h4>Destinations</h4>
          </div>

          <div className='adventures-option-box'>
            <h4>Activities</h4>
          </div>

          <div className='adventures-option-box'>
            <h4>Collections</h4>
          </div>

        </div>

      </div>

      <div className='destination-wrap'>

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

      {/* <div className='activities'>

        <div className='activity-box1'>
          <div className='activity-name'>hiking</div>
        </div>

        <div className='activity-box2'>
          <div className='activity-name'>multiactivity</div>
        </div>

        <div className='activity-box3'>
          <div className='activity-name'>kayaking</div>
        </div>

        <div className='activity-box4'>
          <div className='activity-name'>mountain climbing</div>
        </div>

        <div className='activity-box5'>
          <div className='activity-name'>wildlife watching</div>
        </div>

        <div className='activity-box6'>
          <div className='activity-name'>rafting</div>
        </div>

        <div className='activity-box7'>
          <div className='activity-name'>cycling</div>
        </div>

        <div className='activity-box8'>
          <div className='activity-name'>canyoning</div>
        </div>

        <div className='activity-box9'>
          <div className='activity-name'>snorkelling</div>
        </div>

        <div className='activity-box10'>
          <div className='activity-name'>yoga</div>
        </div>

      </div> */}

    </div>
  )
}

// level
function Level() {
  return (
    <div className='level-container'>

      <div className='level-content'>
        <img className='level-img' src='/images/level-images/level-img.webp' alt='level-img' />

        <div className='level-text'>
          <h2>find the right level for you</h2>
          <h4>Our adventures are tailored to meet a variety of fitness levels so you can pick the perfect match.</h4>
        </div>
      </div>

      <div className='level-box-wrap'>

        <div className='level-box1'>

          <div className='level-name'>
            <h3>easy</h3>

            <div className='level-icon'>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
            </div>
          </div>

        </div>

        <div className='level-box2'>

          <div className='level-name'>
            <h3>moderate</h3>

            <div className='level-icon'>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
            </div>
          </div>

        </div>

        <div className='level-box3'>

          <div className='level-name'>
            <h3>challenging</h3>

            <div className='level-icon'>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
            </div>
          </div>

        </div>

        <div className='level-box4'>

          <div className='level-name'>
            <h3>tough</h3>

            <div className='level-icon'>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
              <div className='level-icon-div'></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

// reviews
function Reviews() {
  return (
    <div className='review-container'>

      <div className='rating-div2'>

        <div className='rating-a'>
          <IoIosStar className='rating-star-icon' />
          <p>Trustpilot</p>
        </div>

        <div className='rating-b'>

          <div className='rating-star-wrap'>
            <IoIosStar className='star-icon' />
          </div>
          <div className='rating-star-wrap'>
            <IoIosStar className='star-icon' />
          </div>
          <div className='rating-star-wrap'>
            <IoIosStar className='star-icon' />
          </div>
          <div className='rating-star-wrap'>
            <IoIosStar className='star-icon' />
          </div>
          <div className='rating-star-wrap'>
            <IoIosStar className='star-icon' />
          </div>

        </div>

        <div className='rating-c'>
          <p>TrustScore <strong>4.8 1,136</strong> reviews</p>
        </div>

      </div>

      <div className='rating-content'>
        <h2>Tried & trusted</h2>
        <p>Much Better Adventures is rated <strong>'Excellent'</strong> on Trustpilot with over 1000 verified trip reviews averaging 4.8/5.</p>
        <button className='rating-btn'>See our Trustpilot Reviews</button>
      </div>

    </div>
  )
}

// adventures
function Adventure() {
  return (
    <div className='adventures-container'>

      <div className='adventures-deals'>

        <div className='adventures-deal-box' id='box-1'>
          <h4>popular</h4>
        </div>

        <div className='adventures-deal-box'>
          <h4>just added</h4>
        </div>

        <div className='adventures-deal-box'>
          <h4>last minute</h4>
        </div>

      </div>

      <div className='adventure-deal-wrap'>

        <div className='adventure-deal-box-div1'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Tough</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>4.9</strong> (196 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>Climb mount toubkal (4167m): </h4>
              <h4>The winter edition</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>4 nights from</p>
              <h5>€450</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div2'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Easy</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>5.0</strong> (88 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>The ultimate arctic circle</h4>
              <h4>Adventure in norway</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>3 nights from</p>
              <h5>€1992</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div3'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Moderate</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>5.0</strong> (128 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>Intro to rock climbing and</h4>
              <h4>yoga in morocco</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>6 nights from</p>
              <h5>€890</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div4'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Challenging</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>4.9</strong> (49 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>coast to coast traverse of</h4>
              <h4>madeira</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>6 nights from</p>
              <h5>€1366</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div5'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Moderate</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>source to sea kayak journey</h4>
              <h4>in montenegro and albania</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>6 nights from</p>
              <h5>€1232</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div6'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Challenging</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>4.9</strong> (125 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>guatemala 5 volcano</h4>
              <h4>challenge</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>9 nights from</p>
              <h5>€1566</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div7'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Moderate</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>5.0</strong> (106 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>trek the annapurna</h4>
              <h4>sanctuary route</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>13 nights from</p>
              <h5>€935</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div8'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Moderate</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>4.9</strong> (90 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>hike slovakia's high tatras</h4>
              <h4>mountains in a weekend</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>3 nights from</p>
              <h5>€640</h5>
            </div>

          </div>

        </div>

        <div className='adventure-deal-box-div9'>

          <div className='adventure-deal-img-box'>

            <div className='adventure-deal-level'>

              <p>Challenging</p>

              <div className='adventure-deal-level-icon'>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
                <div className='adventure-deal-level-icon-div'></div>
              </div>

            </div>

            <div className='adventure-deal-info1'>
              <FaStar className='info1-icon' />
              <p><strong>4.9</strong> (237 reviews)</p>
            </div>

          </div>

          <div className='adventure-deal-info-box'>

            <div className='adventure-deal-info2'>
              <h4>Trek the tour du mont blanc</h4>
              <h4>in a weekend: the hut-to-hut</h4>
            </div>

            <div className='adventure-deal-info3'>
              <p>3 nights from</p>
              <h5>€1450</h5>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

// feautre collage
function FeatureCollage() {
  return (
    <div className='collage-container'>

      <div className='collage-1'></div>

      <div className='collage-2'>
        <div className='collage-2-img-1'></div>
        <div className='collage-2-img-2'></div>
        <div className='collage-2-img-3'></div>
        <div className='collage-2-img-4'></div>
      </div>

    </div>
  )
}