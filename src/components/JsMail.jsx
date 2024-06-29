
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const JsMail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_a51atbf', 'template_9e35k24', form.current, {
                publicKey: 'MiSFlftZGUDkStVZM',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <h1>mail-js</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="to_name" />
                <label>Email</label>
                <input type="email" name="from_name" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
};
export default JsMail