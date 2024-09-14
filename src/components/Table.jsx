import React from 'react';

const Table = () => {
    return (

        < div className='bg-[#96629b]' >
            <div className="bg-[#96629b] container p-2 sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <thead>
                            <tr className="dark:bg-gray-300">
                                <th className="p-3">SN</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Job title</th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-600">1</td>
                                <td className="px-3 py-2 text-lg">
                                    <p>Age</p>
                                </td>
                                <td className="px-3 py-2 text-lg">
                                    <p className="dark:text-gray-600 text-wrap">Age in years when a woman is pregnant.</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-600">2</td>
                                <td className="px-3 py-2 text-lg">
                                    <p>SystolicBP</p>
                                </td>
                                <td className="px-3 py-2 text-lg">
                                    <p className="dark:text-gray-600">Upper value of Blood Pressure in mmHg, another significant attribute during pregnancy.</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-600">3</td>
                                <td className="px-3 py-2 text-lg">
                                    <p>DiastolicBP</p>
                                </td>
                                <td className="px-3 py-2 text-lg">
                                    <p className="dark:text-gray-600">Lower value of Blood Pressure in mmHg, another significant attribute during pregnancy.</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-600">4</td>
                                <td className="px-3 py-2 text-lg">
                                    <p>Blood Glucose</p>
                                </td>
                                <td className="px-3 py-2 text-lg">
                                    <p className="dark:text-gray-600">Blood glucose levels is in terms of a molar concentration, mmol/L.</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-600">5</td>
                                <td className="px-3 py-2 text-lg">
                                    <p>HeartRate</p>
                                </td>
                                <td className="px-3 py-2 text-lg">
                                    <p className="dark:text-gray-600">A normal resting heart rate in beats per minute.</p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-xl font-medium dark:text-gray-600">6</td>
                                <td className="px-3 py-2 text-lg">
                                    <p>Risk Level</p>
                                </td>
                                <td className="px-3 py-2 text-lg">
                                    <p className="dark:text-gray-600">Predicted Risk Intensity Level during pregnancy considering the previous attribute.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Table;