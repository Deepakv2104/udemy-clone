import React from 'react';
import styles from './NavBar.module.css';
import SearchBar from '../search-bar/SearchBar';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.menuButton}>
                        <button
                            type='button'
                            name='menu-icon'
                        >
                            <i className='fa-solid fa-bars'></i>
                        </button>
                    </li>
                    <li className={styles.logo}>
                        <Link to='/Udemy-Clone-ReactJS/'>
                            <img
                                src=''
                                alt='Learning Destiny'
                            />
                        </Link>
                    </li>
                    <li className={styles.categoriesButton}>
                        <button
                            type='button'
                            name='categories-button'
                        >
                            Categories
                        </button>
                    </li>
                    <SearchBar/>
                    <li className={styles.searchButton}>
                        <button
                            type='button'
                            name='search-button'
                        >
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </button>
                    </li>
                    <li className={styles.udemyBusinessButton}>
                        <button
                            type='button'
                            name='udemy-business'
                        >
                             Collaborate
                        </button>
                    </li>
                    <li className={styles.teachOnUdemyButton}>
                        <button
                            type='button'
                            name='teach-on-udemy-button'
                        >
                            Teach on Learning Destiny
                        </button>
                    </li>
                    <li className={styles.cartButton}>
                        <button
                            type='button'
                            name='cart-button'
                        >
                            <i className='fa-solid fa-cart-shopping'></i>
                        </button>
                    </li>
                    {/* <li className={styles.loginButton}>
                        <button
                            type='button'
                            name='login-button'
                        >
                            Log in
                        </button>
                    </li> */}
                    <li className={styles.signupButton}>
                        <button
                            type='button'
                            name='singup-button'
                        >
                            Join Now
                        </button>
                    </li>
                    <li className={styles.langButton}>
                        <button
                            type='button'
                            name='language-button'
                        >
                            <i className='fa-solid fa-globe'></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
