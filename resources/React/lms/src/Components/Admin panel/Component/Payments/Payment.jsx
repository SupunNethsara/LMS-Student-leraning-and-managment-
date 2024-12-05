import React from 'react'
import Breadcumb from '../Breadcumb';
import Paymentmodal from './Paymentmodal';

function Payment() {
    const breadcumbItems = [
        { label: 'Home', link: '#', icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' },
        { label: 'Payment' },
    ];

    return (
        <div>
            <div style={{ width: '100%' }} className="flex justify-between items-center">
                <h3 style={{ fontSize: '25px', color: '#6a6b6b', fontFamily: '"Poppins", serif', }} className="m-4 font-semibold ml-5">
                    Pyament Details
                </h3>
                <Breadcumb items={breadcumbItems} />
            </div>
            <div>
                <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center float-right m-3" type="button">
                + Add Details
                </button>
                <Paymentmodal/>
            </div>
        </div>
    )
}

export default Payment