import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const MyContext = React.createContext('Matir Ring');

const GrandPa = () => {
    const house = 7;
    return (
        <MyContext.Provider value='Dadu ring'>
            <div className='grandpa'>
                <h1>This is grandPa</h1>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </MyContext.Provider>
    );
};

export default GrandPa;