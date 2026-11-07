// react icons
import { IoIosStar } from "react-icons/io";

// content of home section
export default function Content() {
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