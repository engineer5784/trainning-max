import React, { useState } from 'react';
import style from './Testimonials.module.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 }
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className={style.Testimonials} id='Testimonios'>
            <div className={style.left_t}>
                <span>Testimonios</span>
                <span className={style.stroke_text}>Lo que dicen</span>
                <span>de nosotros</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    className={style.review}>
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span className={style.span_name}>
                        {testimonialsData[selected].name}
                    </span>{' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className={style.right_t}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt=''
                />

                <div className={style.arrows}>
                    <img onClick={() => { selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1) }}
                        src={leftArrow}
                        alt=''
                    />
                    <img onClick={() => { selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1) }}
                        src={rightArrow}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials