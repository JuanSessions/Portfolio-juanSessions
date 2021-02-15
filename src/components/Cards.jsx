import React, { useState } from 'react';
import CardItem from './CardItem';
import projectsData from "../data";
import '../style/Cards.css';
// import CardItemStatic from './CardItemStatic';
import CardStatic from './CardStatic';

function Cards() {
    const [data, setData] = useState(projectsData)

    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items__all'>
                        {
                            data.map((data) => {
                                return <CardItem key={data.i} data={data} />
                            })
                        }
                    </ul>
                </div>
                <ul className='cards__items'>
                    <CardStatic />
                </ul>
            </div>
        </div>
    );
}

export default Cards;