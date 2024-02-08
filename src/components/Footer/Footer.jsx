import React from 'react';
import style from './Footer.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logoTMGBW.png';
import club from '../../assets/logoPL.png';
import { Link } from 'react-scroll';

const Footer = () => {
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/trainning.max', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/merlin_solarte7/', '_blank')
    };

    const handleWhatsappClick = () => {
        window.open('https://api.whatsapp.com/send?phone=573147548254', '_blank');
    }

    const handleGmailClick = () => {
        window.location.href = 'mailto:trainningmaxgym@gmail.com';
    }


    return (
        <div className={style.Footer_Container}>
            <hr />
            <div className={style.footer}>
                <div className={style.social_Links}>
                    <FaFacebook className={style.icon} onClick={handleFacebookClick} />
                    <FaInstagram className={style.icon} onClick={handleInstagramClick} />
                    <FaWhatsapp className={style.icon} onClick={handleWhatsappClick} />
                    <FaEnvelope className={style.icon} onClick={handleGmailClick} />
                </div>
            </div>
            <div className={style.logo_footer}>
                <Link
                    to='logo'
                    spy={true}
                    smooth={true}
                >
                    <img src={logo} alt='logo' />
                </Link>
                <Link
                    to='logo'
                    spy={true}
                    smooth={true}
                >
                    <img src={club} alt='club' />
                </Link>
            </div>

            <div className={style.sign}>
                <span>Developed by Arch-one</span>
                <span >
                    Contacto :{' '}
                    <a href="mailto:programador5781@gmail.com">programador5781@gmail.com</a>
                </span>
                <span>Derechos Reservados &#169;</span>
                <span>2023</span>
            </div>

            <div className={`${style.blur} ${style.blur_f_1}`}></div>
            <div className={`${style.blur} ${style.blur_f_2}`}></div>
        </div>
    )
}

export default Footer