import React from 'react'
import './Home.scss'
import NAOMI_IMG from '../../Assets/PHOTO-2022-07-10-17-29-25.jpg'
const Home = () => {
    return (
        <div className='home'>
            <div>
                <h1 title="ד״ר נעמי היימן" className="title">ד״ר נעמי היימן איתי </h1>
                <div className='home-header'>
                    <div className="img-warp">
                        <img alt="נעמי היימן איתי פסיכוטרפיסטית עם ניסיון של שנים, כל מה שחיפשם על נעמי היימן" className="main-img" src={NAOMI_IMG} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home