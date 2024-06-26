import React from 'react';
import './Header.css';
import ld from './ld.jpg'; // Make sure to use the new PNG image

function Header() {
    return (
        <>
            <section className='new-to-udemy'>
                <article>
                    <p>Welcome to Learning Destiny!</p>
                    <p>
                    "Empower Your Learning Journey"
                    </p>
                </article>
                <figure>
                    <img
                        src={ld}
                        alt='Learning Destiny Logo'
                        className='logo'
                    />
                </figure>
            </section>
        </>
    );
}

export default Header;
