import React from 'react'
import './Contact.scss'
import MAIL_IMG from '../../Assets/mail_4.svg'
import PHONE_IMG from '../../Assets/phone_7.svg'
const Contact = () => {
    return (
        <div className='contact'>
            <h1>ליצירת קשר והשארת פרטים</h1>
            <div className='icon-row'>
                <div className='icon'>
                    <img src={MAIL_IMG} />
                </div>
                <div className='icon'>
                    <img src={PHONE_IMG} />
                </div>
            </div>
        </div>
    )
}

export default Contact