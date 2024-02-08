import React, { useRef, useState } from 'react';
import style from './Join.module.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Join = () => {
    const form = useRef();
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!email) {
            // Si el campo de correo electrónico está vacío, muestra un mensaje de error
            toast.error('El campo de correo electrónico es obligatorio.');
            return; // Detiene el envío del formulario si el campo está vacío
        }

        emailjs.sendForm('service_yvz0p5k', 'template_1578x7b', form.current, 'VBjn4ljBKO4JTOlQ0')
            .then((result) => {
                console.log(result.text);
                toast.success('¡Email enviado con éxito!', { autoClose: 3000 });
                form.current.reset(); // Limpiar el formulario después de enviar
            }, (error) => {
                console.log(error.text);
                toast.error('¡Error al enviar el email!');
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    return (
        <div className={style.Join} id='join_us'>
            <div className={style.left_Join}>
                <hr />
                <div>
                    <span className='stroke_text'>LISTO PARA </span>
                    <span>ELEVAR EL NIVEL</span>
                </div>
                <div>
                    <span>DE TU CUERPO </span>
                    <span className='stroke_text'>CON NOSOTROS ?</span>
                </div>
            </div>
            <div className={style.right_Join}>
                <form ref={(form)} action='' className={style.email_Container} onSubmit={sendEmail}>
                    <input type='email' name='from_name' placeholder='Ingresa tu email' value={email}
                        onChange={handleEmailChange} />
                    <button className={`${style.btn} ${style.btn_Join}`}>Enviar</button>
                </form>
            </div>


        </div>
    )
}

export default Join;