import { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const TestHealth = () => {

    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState([]);
    const navigate = useNavigate();

    const sweetAlertFunction = (message) => {
        Swal.fire({
            title: "RISK LEVEL",
            text: message,
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "SHOW ADVICE "
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/blogs')                
            }
        });
    }

    const outputFunction = (result) => {

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
            age: event.target.age.value,
            systolicbp: event.target.systolicbp.value,
            diastolicbp: event.target.diastolicbp.value,
            bs: event.target.bs.value,
            bodytemp: event.target.bodytemp.value,
            heartrate: event.target.heartrate.value
        }

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json()) //
            .then(data => setResponseData(data))
            .catch(error => {
                console.error('Error:', error);
            });

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.log(responseData.result);
            if (responseData.result == 1) {
                sweetAlertFunction("You Have Low Risk")
            }
            else if (responseData.result == 2) {
                sweetAlertFunction("You Have Medium Risk")
            }
            else if (responseData.result == 3) {
                sweetAlertFunction("You Have High Risk")
            }
        }, 2000)
    }

    return (
        <div className="h-screen flex items-center justify-center open-sans">

            {
                loading ?
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#640D6B"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    :
                    <div className="flex items-center justify-center bg-[#640D6B] p-10 rounded-xl">
                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <h1 className="text-5xl text-white mb-5 font-semibold">Test Your Health Risk</h1>
                            <div className="space-y-2">
                                <div className="flex gap-5 w-full">
                                    <label className="space-y-2 w-full">
                                        <h1 className="text-lg font-semibold text-white">Age: </h1>
                                        <input required type="text" name="age" placeholder="Type here" className="input input-bordered bg-white focus:outline-none border-none max-w-xs w-full" />
                                    </label>
                                    <label className="space-y-2 w-full">
                                        <h1 className="text-lg font-semibold text-white">SystolicBP: </h1>
                                        <input required type="text" name="systolicbp" placeholder="Type here" className="input input-bordered bg-white focus:outline-none border-none w-full max-w-xs" />
                                    </label>
                                </div>
                                <div className="flex gap-5">
                                    <label className="space-y-2 w-full">
                                        <h1 className="text-lg font-semibold text-white">DiastolicBP: </h1>
                                        <input required type="text" name="diastolicbp" placeholder="Type here" className="input input-bordered bg-white focus:outline-none border-none w-full max-w-xs" />
                                    </label>
                                    <label className="space-y-2 w-full">
                                        <h1 className="text-lg font-semibold text-white">Blood Sugar: </h1>
                                        <input required type="text" name="bs" placeholder="Type here" className="input input-bordered bg-white focus:outline-none border-none w-full max-w-xs" />
                                    </label>
                                </div>
                                <div className="flex gap-5">
                                    <label className="space-y-2 w-full">
                                        <h1 className="text-lg font-semibold text-white">BodyTemp: </h1>
                                        <input required type="text" name="bodytemp" placeholder="Type here" className="input input-bordered bg-white focus:outline-none border-none w-full max-w-xs" />
                                    </label>
                                    <label className="space-y-2 w-full">
                                        <h1 className="text-lg font-semibold text-white">HeartRate: </h1>
                                        <input required type="text" name="heartrate" placeholder="Type here" className="input input-bordered bg-white focus:outline-none border-none w-full max-w-xs" />
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <input type="submit" value="CHECK" className="text-[#640D6B] bg-white font-bold text-xl p-2 rounded-xl" />
                            </div>
                        </form>
                    </div>
            }

        </div>
    );
};

export default TestHealth;