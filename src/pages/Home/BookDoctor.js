import React from 'react'
import Button from '../../components/Button/Button'
import './Home.css';
import doctor from './doctor.png';

const BookDoctor = () => {
  return (
    <div className='doctor_container'>
        <div className='description'>
            <h2>Let's Navigate Through This Together</h2>
            <span>Empathy, support and expertise await</span>
            <Button>Book Now</Button>
        </div>
        <img src={doctor} alt="" />
    </div>
  )
}

export default BookDoctor