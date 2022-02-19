import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import data from '@src/data/index.yml';
import * as styles from './styles';
import { useSpring, animated } from '@react-spring/web';

type Inputs = {
    email: string,
    name: string,
    message: string,
};

type Notif = {
    type: string | null,
    message: string,
};

const duration = 5000;
const pattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const Contact = (): React.ReactElement | null => {
    const [notif, setNotif] = useState<Notif>({ type: null, message: '' });
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const progress = useRef(null);
    const [style, api] = useSpring(() => ({
        width: '0%',
        config: { mass: 5, tension: 350, friction: 40, duration },
    }));

    async function handleSend(values: Inputs): Promise<void> {
        try {
            setLoading(true);
            const basinUrl = 'https://usebasin.com/f/39da2d81e0d2';

            const result = await fetch(basinUrl, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (result.status === 200) {
                reset();
                setNotif((state) => ({ ...state, type: 'success', message: 'The email was sent successfuly' }));
            } else {
                setNotif((state) => ({ ...state, type: 'error', message: 'Error! please resend it' }));
            }
        } catch (e) {
            console.log(e);
            setNotif((state) => ({ ...state, type: 'error', message: 'Error! please resend it' }));
        } finally {
            setLoading(false);

            api.start({ width: '100%' });

            setTimeout(() => {
                setNotif((state) => ({ ...state, type: null, message: '' }));
                api.set({ width: '0%' });
            }, duration);
        }
    }

    if (data.contact) {
        return (
            <form id="contact" className="wrapper">
                <h2 className="section-title"><span>03. Contact me</span></h2>

                <p className="text-base text-left py-3 pb-6 text-transition-dark">Although I’m not currently looking for any new opportunities, my inbox is always open.</p>

                <div className={styles.notif({ type: notif.type })}>
                    <strong className="text-xl text-white capitalize">{notif.type}</strong>
                    <p className="text-sm text-gray-700 p-0">{notif.message}</p>

                    {
                        notif.type !== null && (
                            <animated.div ref={progress} className={styles.progress} style={style} />
                        )
                    }
                </div>

                <fieldset className="block md:flex justify-center">
                    <label htmlFor="email" className="w-full md:w-1/2 relative z-20 block">
                        <input
                            {...register('email', { required: true, pattern })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address *"
                            className={styles.input({ isLeft: true })}
                        />

                        {errors.email?.type === 'required' && (
                            <span className={styles.error}>Please insert email address</span>
                        )}
                        {errors.email?.type === 'pattern' && (
                            <span className={styles.error}>Email is incorrect</span>
                        )}
                    </label>

                    <label htmlFor="name" className="w-full md:w-1/2 relative z-20 block">
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full name or Company *"
                            className={styles.input({ isLeft: false })}
                        />

                        {errors.name?.type === 'required' && (
                            <span className={styles.error}>Please insert your name or company</span>
                        )}
                    </label>
                </fieldset>

                <label htmlFor="message" className="relative block">
                    <textarea
                        {...register('message', { required: true })}
                        name="message"
                        placeholder="Your message *"
                        className={styles.area}
                    />

                    {errors.message?.type === 'required' && (
                        <span className={styles.error}>Please insert your message</span>
                    )}
                </label>

                <button
                    type="button"
                    className={styles.button}
                    onClick={handleSubmit(handleSend)}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>

                <footer className="block md:hidden text-transition-dark w-full text-center pt-6">
                    Created by {data.author.name} @{new Date().getFullYear()}
                </footer>
            </form>
        );
    }

    return null;
};

export default Contact;
