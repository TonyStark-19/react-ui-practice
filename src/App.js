// css
import './App.css';

// react icons
import { FiMenu } from "react-icons/fi";
import { IoIosGlobe, IoIosStar } from "react-icons/io";
import { FaRegUser, FaSearch, FaStar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { LuMountainSnow } from "react-icons/lu";

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
      <Aim />
      <Purpose />
      <Footer />
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
      <h6>Save on <button>trips departing soon</button></h6>
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
        <p>Much Better Adventures is rated <strong>'Excellent'</strong> on Trustpilot with
          over 1000 verified trip reviews averaging 4.8/5.</p>
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

              <LuMountainSnow className='deal-level-icon' />
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

      <div className='collage-1'>
        <h4>summer 2025</h4>
        <h2>flash sale</h2>
        <h2>now on</h2>
        <p>Up to 15% off select summer 2025 departures</p>
        <button className='sale-btn'>See the Sale</button>
      </div>

      <div className='collage-2'>

        <div className='collage-2-img-1'>
          <h2>features</h2>
        </div>
        <div className='collage-2-img-2'>
          <h2>guides</h2>
        </div>
        <div className='collage-2-img-3'>
          <h2>packing & prep</h2>
        </div>
        <div className='collage-2-img-4'>
          <h2>community</h2>
        </div>

      </div>

    </div>
  )
}

// aim
function Aim() {
  return (
    <div className='aim-container'>

      <div className='aim-box'>
        <img src='/images/aim/aim1.webp' alt='aim1'></img>
        <h4>Explore places you couldn't yourself</h4>
        <p>All trips are led by certified expert guides, unlocking life experiences in places most never see.</p>
      </div>
      <div className='aim-box'>
        <img src='/images/aim/aim2.svg' alt='aim2'></img>
        <h4>Go with the outdoor specialists</h4>
        <p>Choose from 200+ award-winning active outdoor adventures in wild places, whatever your mood.</p>
      </div>
      <div className='aim-box'>
        <img src='/images/aim/aim3.webp' alt='aim3'></img>
        <h4>Join a small like-minded group</h4>
        <p>75% join our trips as solo travellers, with most in their 30s-50s. 95% give our group dynamic 5 stars.</p>
      </div>
      <div className='aim-box'>
        <img src='/images/aim/aim4.webp' alt='aim4'></img>
        <h4>Hassle-free from start to finish</h4>
        <p>We've sorted the logistics, so you can just rock up and have a blast in the wild.</p>
      </div>

    </div>
  )
}

// purpose
function Purpose() {
  return (
    <div className='purpose-container'>
      <h5>Our Purpose</h5>
      <p>To protect our world's wild places, one adventure at a time.</p>
    </div>
  )
}

// footer
function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-wrap'>

        <div className='footer-div1'>
          <h4>Book With Confidence</h4>
          <p>Find out how your booking with Much Better Adventures is protected through our ABTOT membership</p>

          <div className='footer-div1-images'>
            <img className='img1' src='/images/footer/img1.svg' alt='img1'></img>
            <img className='img2' src='/images/footer/img2.svg' alt='img2'></img>
            <img className='img3' src='/images/footer/img3.svg' alt='img3'></img>
          </div>
        </div>

        <div className='footer-div2'>

          <div className='footer-div2-list'>

            <div className='list-head'>about</div>

            <div className='list-links-wrap'>
              <div className='list-links'>Our Story</div>
              <div className='list-links'>Our Impact</div>
              <div className='list-links'>Meet the Team</div>
              <div className='list-links'>Meet Our Hosts</div>
              <div className='list-links'>Careers</div>
              <div className='list-links'>Happiness Guarantee</div>
              <div className='list-links'>Book with Confidence</div>
            </div>

          </div>

          <div className='footer-div2-list'>

            <div className='list-head'>customers</div>

            <div className='list-links-wrap'>
              <div className='list-links'>Contact Us</div>
              <div className='list-links'>Chat on WhatsApp</div>
              <div className='list-links'>Help and FAQs</div>
              <div className='list-links'>Travel Advice</div>
              <div className='list-links'>Agency Booking Conditions</div>
              <div className='list-links'>Cookies</div>
              <div className='list-links'>T&Cs</div>
              <div className='list-links'>Content Policy</div>
            </div>

          </div>

          <div className='footer-div2-list'>

            <div className='list-head'>Travel Companies</div>

            <div className='list-links-wrap'>
              <div className='list-links'>Host Knowledge Base</div>
              <div className='list-links'>Apply to Host</div>
            </div>

          </div>

          <div className='footer-div2-list'>

            <div className='list-head'>Partners</div>

            <div className='list-links-wrap'>
              <div className='list-links'>Media Partnerships</div>
            </div>

            <button className='list-btn'>GBP</button>

          </div>

        </div>

        <div className='footer-div3'>
          <h4>Positive impact adventure travel</h4>

          <div className='footer-div3-wrap'>
            <img className='img4' src='/images/footer/img4.svg' alt='img4'></img>

            <div className='footer-div3-text'>
              <p>Responsible travel has always been at the core of what we do.
                Travelling with Much Better Adventures means not just better trips for you,
                it's better for local communities, better for wildlife and better for the planet.</p>
              <h6>Learn More</h6>
            </div>

          </div>
        </div>

      </div>

      <div className='footer-div4'>
        <div className='footer-div4-1'>
          <img className='img5' src='/images/footer/img5.svg' alt='img5'></img>
          <p>© Copyright Gentianes Solutions Ltd.
            Registration Number 06916506 (England and Wales)</p>
        </div>

        <div className='footer-div4-2'>
          <div className='footer-div4-2-icon'><FaFacebook className='div4-2-icon' /></div>
          <div className='footer-div4-2-icon'><FaTwitter className='div4-2-icon' /></div>
          <div className='footer-div4-2-icon'><FaInstagram className='div4-2-icon' /></div>
        </div>
      </div>

    </div>
  )
}