import React, { useState } from 'react'
import BookDoctor from './BookDoctor'
import Button from '../../components/Button/Button'
import List from '../../components/List/List';
import { FaRegBell } from "react-icons/fa";
import './Home.css';

const Home = ({ clientName, medicalTests, factSheets }) => {
    const [listItems, setListItems] = useState(medicalTests);
    const [isTestActive, setIsTestActive] = useState(true);

    const toggleListItems = (e,listItems) => {
        if(e.target.innerHTML === 'Medical Tests')
            setIsTestActive(true);
        else if (e.target.innerHTML === 'Fact Sheets')
            setIsTestActive(false);
        setListItems(listItems);
    }

    return (
        <div className='home_container'>
            <header>
                <div className='header_text'>
                    <h1>Hello {clientName}</h1>
                    <p>Welcome Back</p>
                </div>
                <div className='bell_container' tabIndex='0'>
                    <FaRegBell size={26}/>
                </div>
            </header>
            <BookDoctor />
            <Button classes="large_btn">
                <div>
                    <p>Ongoing Appointments</p>
                    <p>&gt;</p>
                </div>
            </Button>
            <div className='choose_list'>
            <Button classes={`sheet-test-btn ${!isTestActive ? 'out-focus' : undefined}`} toggleListItems={(e) => toggleListItems(e,medicalTests)}>Medical Tests</Button>
            <Button classes={`sheet-test-btn ${isTestActive ? 'out-focus' : undefined}`}  toggleListItems={(e) => toggleListItems(e,factSheets)}>Fact Sheets</Button>
            </div>
            
            <List listItems={listItems} />
        </div>
    )
}

export default Home