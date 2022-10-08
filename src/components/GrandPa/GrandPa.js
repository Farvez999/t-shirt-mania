import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

const MyContext = React.createContext('Matir Ring');

const GrandPa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h1>This is grandPa</h1>
            <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;