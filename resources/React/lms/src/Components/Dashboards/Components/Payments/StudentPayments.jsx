import React, { useState ,useEffect } from 'react'
import axios from 'axios';
function StudentPayments() {

    const [payments, setPayments] = useState('');

    const fetchPayments = async () => {
        const studentRegisterId = localStorage.getItem('student_register_id');
        try {
            const response = await axios.get(
                `http://localhost:8000/api/payments/${studentRegisterId}`
            );
            setPayments(response.data);
        } catch (error) {
            console.error('Error fetching payments:', error);
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);
    return (
        <div>


            <div class="relative overflow-x-auto">
                {payments.length > 0 ? (
                    <table class="w-full text-sm text-left rtl:text-right">

                        <thead class="text-xs text-gray-700 uppercase bg-gray-200 d">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Payment Amount
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    payment Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payment Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Result
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr class="bg-white border-b ">
                                    <th scope="row" class="px-6 py-4 font-medium ">
                                        {payment.amount}
                                    </th>
                                    <td class="px-6 py-4 text-green-500">
                                        {payment.status}
                                    </td>
                                    <td class="px-6 py-4">
                                        {payment.date}
                                    </td>
                                    <td class="px-6 py-4 text-orange-600  ">
                                        Done
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                ) : (
                    <p>No payment records found.</p>
                )}
            </div>

        </div>
    )
}

export default StudentPayments