import { Link } from "react-router-dom";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="h-screen bg-[#640D6B]">

            <div className="h-full roboto flex items-center justify-center">
                <div className="flex gap-20">

                    <div>
                        <img src="https://i.postimg.cc/wxWT1wRc/TI-1222-bathija-maternal-900x400.webp" alt="" />
                    </div>

                    <div className="space-y-5 items-center open-sans">
                        <div className="text-7xl font-bold text-white text-right uppercase space-y-2">
                            <h1>Check</h1>
                            <h1>Your </h1>
                            <h1>Maternal</h1>
                            <h1>Health</h1>
                        </div>
                        <div className="flex justify-end">
                            <Link to='/test'>
                                <button className="text-3xl uppercase text-[#640D6B] p-4 rounded-lg font-semibold bg-white">Check Now</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;