import React from 'react'
import './List.css';

const List = ({ listItems }) => {
    return (
        <div>
            <ul key={listItems} className='list'>
                { listItems.map((item) => 
                    (
                        <li key={item} className='list_item' tabIndex='0'>{item}<span className='proceed'>&gt;</span></li>
                    )
                )}
            </ul>
        </div>
    )
}

export default List