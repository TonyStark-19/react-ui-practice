// react icons
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// footer
export default function Footer() {
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