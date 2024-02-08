import React, { useState } from 'react';
import style from './Protein.module.css';
import { proteinData } from '../../data/proteinData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Protein = () => {
    const transition = { type: 'spring', duration: 3 }
    const [selected, setSelected] = useState(0);
    const pLength = proteinData.length;

    const handleWhatsAppClick = () => {
        const phoneNumber = '573147548254';
        const message = '¡Quiero solicitar la proteína!';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className={style.Protein} id='proteins'>

            <div className={style.right_t}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    src={proteinData[selected].image} alt=''
                />
            </div>


            <div className={style.left_t}>
                <span>Proteínas</span>
                <span className={style.stroke_text}>lo mejor</span>
                <span>para entrenar</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    className={style.review}>
                    {proteinData[selected].review}
                </motion.span>
                <span>
                    <span className={style.span_name}>
                        {proteinData[selected].name}
                    </span>{' '}
                    - {proteinData[selected].status} {'       '}
                    <button
                        className={style.btn}
                        onClick={handleWhatsAppClick}
                    >
                        Solicítala aquí!
                    </button>
                </span>




            </div>
        </div>
    )
}

export default Protein;