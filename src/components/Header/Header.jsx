import React, { useState } from 'react';
import style from './Header.module.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);



    return (
        <div className={style.header}>
            <img src={Logo} alt='logo' className={style.logo} id='logo' />
            {(menuOpened === false && mobile === true) ? (<div style={{
                backgroundColor: '#3c3f45',
                padding: '0.5rem',
                borderRadius: '5px'
            }}
                onClick={() => setMenuOpened(true)}
            >
                <img src={Bars} alt='' style={{ width: '1.5rem', height: '1.5rem' }} />
            </div>) : <ul className={style.header_menu}>
                <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='Hero'
                        spy={true}
                        smooth={true}
                    >
                        Inicio
                    </Link>
                </li>
                <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='programs'
                        spy={true}
                        smooth={true}
                    >
                        Programas
                    </Link></li>
                <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}
                    >
                        Nosotros
                    </Link>
                </li>
                <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='plans'
                        spy={true}
                        smooth={true}
                    >
                        Planes
                    </Link>
                </li>
                <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='Testimonios'
                        spy={true}
                        smooth={true}
                    >
                        Testimonios
                    </Link>
                </li>
                <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='proteins'
                        spy={true}
                        smooth={true}
                    >
                        Proteínas
                    </Link>
                </li>
                {/* <li >
                    <Link
                        onClick={() => setMenuOpened(false)}
                        to='advertisements'
                        spy={true}
                        smooth={true}
                    >
                        Anuncios
                    </Link>
                </li> */}
            </ul>}

        </div>
    )
}

export default Header