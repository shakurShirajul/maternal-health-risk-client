import React from 'react';
import img from '../assets/doodle.svg'
const ContactUs = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-600">Send Us a Email....</div>
                    </div>
                    <img src={img} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Mrs Abdullah" className="border w-full p-3 border-gray-700 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" placeholder='example@gmail.com' className="w-full p-3 border rounded border-gray-700 dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" placeholder='Your Message' className="w-full p-3 rounded border border-gray-700 dark:bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;