import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <div className='flex gap-5'>
                    <div className="max-w-xs rounded-md shadow-md border">
                        <img src="https://i.postimg.cc/Nf2zv06q/pexels-sarah-chai-7282403.jpg" alt="" className="object-cover object-center w-full h-72 p-5 rounded-xl" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">High Maternal Risk</h2>
                                <p className="dark:text-gray-800">Consult with a maternal-fetal medicine specialist</p>
                            </div>
                            <Link to="/blogone">
                                <button type="button" className="flex items-center justify-center text-white bg-[#B51B75] w-full p-3 font-semibold tracking-wide rounded-md ">Read more</button>
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-md shadow-md border">
                        <img src="https://i.postimg.cc/Nj1CLPCd/pexels-william-fortunato-6393333.jpg" alt="" className="object-cover object-center w-full h-72 p-5 rounded-xl" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Medium Maternal Risk</h2>
                                <p className="dark:text-gray-800">During a medium-risk regular maternal checkup must</p>
                            </div>
                            <Link to="/blogtwo">
                                <button type="button" className="flex items-center justify-center text-white bg-[#B51B75] w-full p-3 font-semibold tracking-wide rounded-md ">Read more</button>
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-md shadow-md border">
                        <img src="https://i.postimg.cc/5tgPSQVv/pexels-cottonbro-5853667.jpg" alt="" className="object-cover object-center w-full h-72 p-5 rounded-xl" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Low Maternal Risk Health</h2>
                                <p className="dark:text-gray-800">Attend prenatal check-ups when it is needed</p>
                            </div>
                            <Link to="/blogthree">
                                <button type="button" className="flex items-center justify-center text-white bg-[#B51B75] w-full p-3 font-semibold tracking-wide rounded-md ">Read more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;