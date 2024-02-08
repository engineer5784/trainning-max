import React from 'react';
import style from './Programs.module.css';
import{ programsData } from '../../data/programsData';
import  RightArrow  from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className={style.Programs} id='programs'>
        {/* Programs */}
        <div className={style.programs_header}>
            <span className={style.stroke_text}>Explora</span>
            <span>Nuestros programas</span>
            <span className={style.stroke_text}>para moldearte</span>
        </div>

        <div className={style.program_categories}>
            {programsData.map((program, index) => (
                <div className={style.category} key={index}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className={style.join_now}><span>Únete ahora</span><img src={RightArrow}/></div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Programs