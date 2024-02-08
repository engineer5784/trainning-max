import React from 'react';
import style from './Hero.module.css';
import Header from '../Header/Header';
import { hero_img_back, Heart, Calories, girl } from './index';
import { motion } from 'framer-motion';


const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth<=768 ? true : false;
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=573147548254', '_blank');
};

  return (
    <div className={style.hero} id='Hero' >
      <div className={`${style.blur} ${style.hero_blur}`}></div>
      <div className={style.left_h}>
        <Header />

        {/* Teh best ad */}
        <div className={style.the_best_ad}>
          <motion.div
            initial={{ left: mobile? '165px': '238px' }}
            whileInView={{ left: '9px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>el mejor club de fitness de San Sebas</span>
        </div>

        {/* Hero Heading */}
        <div className={style.hero_text}>
          <div>
            <span className={style.stroke_text}>Construye </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo Ideal</span>
          </div>
          <div>
            <span> Aquí te ayudamos a formar y construir tu cuerpo ideal y vivir tu vida al máximo. </span>
          </div>
        </div>

        {/* Figures */}
        <div className={style.figures}>
          <div>
            <span>+2 </span>
            <span>Entrenadores </span>
          </div>
          <div>
            <span>Más </span>
            <span>Equipos</span>
          </div>
          <div>
            <span>+10 </span>
            <span>Programas fitness</span>
          </div>
        </div>

        {/* Button */}
        <div className={style.hero_buttons}>
          <button className={style.btn} onClick={handleWhatsAppClick}>Empieza Ya</button>
          <button className={style.btn} onClick={handleWhatsAppClick}>Aprende Más</button>
        </div>
      </div>

      <div className={style.right_h}>
        <button className={style.btn} onClick={handleWhatsAppClick}>Únete Ahora</button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className={style.heart_rate}>
          <img src={Heart} alt='' />
          <span>Frec. cardíaca </span>
          <span>116 ppm</span>
        </motion.div>

        {/* Hero images */}
        {/* <img src={hero_img} alt="man fitness" className={style.hero_img} /> */}
        <img src={girl} alt="man fitness" className={style.hero_img} />
        <motion.img 
        initial={{ right: '11rem' }}
        whileInView={{ right: '20rem' }}
        transition={transition}
        src={hero_img_back} alt="man fitness" className={style.hero_img_back} />

        {/* calories */}
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '32rem' }}
          transition={transition}
          className={style.calories}>
          <img src={Calories} alt='' />
          <div>
            <span>Calorías quemadas</span><span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
