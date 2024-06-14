import React from 'react';
import './Home.scss'
import Search from '../images/search.png'
import Ill from '../images/Illustration.png'
const Home = () => {
    return (
        
        <section className='main'>
            
            <div className="main__container container">
                <div className="main__left">
                <h1>Awesome tools for
                Designer & Developer.</h1>
               <p>Antool is a web collection of information on paid or free Design and Development tools</p> 
               <div className="main__left__search">
                <div className="search__left">
                    <img src={Search} alt="" />
                    <input type="text" placeholder="find more than 430+ tools..."/>
                </div>
                <button>Search</button>
               </div>
               {/* <div className="main__left__images">

               </div> */}
                </div> 
                <img className='main__illustration' src={Ill} alt="" />
            </div>
        </section>
        
    );
};

export default Home;