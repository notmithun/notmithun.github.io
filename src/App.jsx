import appleTouchIcon from '../favicons/apple-touch-icon.png';
import favicon32 from '../favicons/favicon-32x32.png';
import favicon16 from '../favicons/favicon-16x16.png';
import mylogo from './assets/mithun_logo.png';
import dark from './assets/dark_mode_icon.png';
import light from './assets/light_mode_icon.png';
import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    // State to manage theme
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle theme function
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const d = new Date();

    const myAge = d.getFullYear() - 2012;

    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
            <link rel="manifest" href="../favicons/site.webmanifest"/>
            <div className={isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
                <header
                    className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        <img src={mylogo} alt="My logo" style={{width: '50px', height: 'auto'}}/>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${!isDarkMode ? 'active' : ''}`} aria-current="page">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Apps
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Games
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Terminal
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Recipes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Feedback
                            </a>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="btn btn-link ms-3 p-0 border-0"
                        onClick={toggleTheme}
                    >
                        <img
                            src={isDarkMode ? {dark} : {light}}
                            alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            style={{width: '30px', height: '30px'}}
                        />
                    </button>
                </header>
                <main className="container py-5">
                    <br/>
                    <br/>
                    <h1>Who am I?</h1>
                    <p>I&#39;m Mithun! I&#39;m {myAge} I&#39;m from India, but I&#39;m Sri Lanka right now.</p>
                    <br/>
                    <h2>About myself a bit more...</h2>
                    <p className="text-break">I know I&#39;m a bit young but I&#39;ve been fond of computers since grade
                        4 (about 10 years old) then after I started learning coding (from <a
                            href="https://www.codingal.com">Codingal</a>) when I was in grade 6 (about 11 years old).
                        I&#39;m currently studying at <a href="https://www.ais.lk">Asian International School (AIS)</a>.
                    </p>
                </main>
                <footer>
                    Dark mode icon: <a href="https://www.flaticon.com/free-icons/mode" title="mode icons">Mode icons
                    created
                    by adriansyah - Flaticon</a>
                    <br/>
                    Light mode icon: <a href="https://www.flaticon.com/free-icons/light-mode" title="light mode icons">Light
                    mode icons created by bsd - Flaticon</a>
                </footer>
            </div>
        </>
    );
}

export default App;
