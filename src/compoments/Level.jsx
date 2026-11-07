// level
export default function Level() {
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