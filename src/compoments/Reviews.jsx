// react icons
import { IoIosStar } from "react-icons/io";

// reviews
export default function Reviews() {
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