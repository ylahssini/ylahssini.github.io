import { useState } from 'react';
import { useForm } from 'react-hook-form';
import data from '@src/data/index.yml';

type Inputs = {
    email: string,
    name: string,
    message: string,
};

type Notif = {
    type: string | null,
    message: string,
};

// eslint-disable-next-line no-useless-escape
const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const Contact = (): React.ReactElement | null => {
    const [notif, setNotif] = useState<Notif>({ type: null, message: '' });
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors, reset } = useForm<Inputs>();

    async function handleSend(values: Inputs): Promise<void> {
        try {
            setLoading(true);
            const basinUrl = 'https://usebasin.com/f/39da2d81e0d2';

            const request = await fetch(basinUrl, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(values),
            });

            const response = await request.json();

            if (response.success) {
                reset();
                setNotif({ type: 'success', message: 'The email was sent successfuly' });
            } else {
                setNotif({ type: 'error', message: 'Error! please resend it' });
            }
        } catch (e) {
            setNotif({ type: 'error', message: 'Error! please resend it' });
        } finally {
            setLoading(false);
            setTimeout(() => {
                setNotif({ type: null, message: '' });
            }, 5000);
        }
    }

    if (data.contact) {
        const errorClassName = 'text-xs text-white absolute -bottom-4 right-0 bg-red-700 p-2 mt-9 rounded-md shadow-md';

        return (
            <form id="contact">
                <div className={`${notif.type !== null ? 'opacity-100' : 'opacity-0'} fixed transition-all ease-in bg-white top-0 right-50 rounded-md shadow-lg p-6`}>
                    <h5 className={`text-sm text-${notif.type === 'success' ? 'green' : 'red'}-700 capitalize`}>{notif.type}</h5>
                    <p className="text-xs text-gray-700 p-0">{notif.message}</p>
                </div>

                <h4 className="text-sm text-blue-400 font-hairline uppercase">Contact me</h4>

                <fieldset className="flex justify-center">
                    <label htmlFor="email" className="w-full md:w-1/2 relative z-20 block">
                        <input
                            ref={register({ required: true, pattern })}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address *"
                            className="border border-gray-400 border-r-0 bg-white p-4 outline-none w-full"
                        />

                        {errors.email?.type === 'required' && (
                            <span className={errorClassName}>Please insert email address</span>
                        )}
                        {errors.email?.type === 'pattern' && (
                            <span className={errorClassName}>Email is incorrect</span>
                        )}
                    </label>

                    <label htmlFor="name" className="w-full md:w-1/2 relative z-20 block">
                        <input
                            ref={register({ required: true })}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full name or Company *"
                            className="border border-gray-400 bg-white p-4 outline-none w-full"
                        />

                        {errors.name?.type === 'required' && (
                            <span className={errorClassName}>Please insert your name or company</span>
                        )}
                    </label>
                </fieldset>

                <label htmlFor="message" className="relative block">
                    <textarea
                        ref={register({ required: true })}
                        name="message"
                        placeholder="Your message *"
                        className="bg-white p-4 w-full resize-y h-48 border border-t-0 border-gray-400 outline-none"
                    />

                    {errors.message?.type === 'required' && (
                        <span className={errorClassName}>Please insert your message</span>
                    )}
                </label>

                <button
                    type="button"
                    className="font-bold bg-blue-400 text-white w-full p-4"
                    onClick={handleSubmit(handleSend)}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        );
    }

    return null;
};

export default Contact;
