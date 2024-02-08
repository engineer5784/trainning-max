import React, {useState} from 'react';
import style from "./Advertisements.module.css";
import { advertisementsData } from "../../data/advertisementsData";
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';


const Advertisements = () => {
    const transition = { type: 'spring', duration: 3 }
    const [selected, setSelected] = useState(0);
    const aLength = advertisementsData.length;

  return (
    <div className={style.Advertisements} id='advertisements'>
            <div className={style.left_t}>
                <span>Anuncios</span>
                <span className={style.stroke_text}>Segunda</span>
                <span>Maratón</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    className={style.review}>
                    {advertisementsData[selected].review}
                </motion.span>
                <span>
                    <span className={style.span_name}>
                        {advertisementsData[selected].name}
                    </span>{' '}
                    - {advertisementsData[selected].status}
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
                    src={advertisementsData[selected].image} alt=''
                />

                <div className={style.arrows}>
                    <img onClick={() => { selected === 0 ? setSelected(aLength - 1) : setSelected((prev) => prev - 1) }}
                        src={leftArrow}
                        alt=''
                    />
                    <img onClick={() => { selected === aLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1) }}
                        src={rightArrow}
                        alt=''
                    />
                </div>
            </div>
        </div>
  )
}

export default Advertisements;
