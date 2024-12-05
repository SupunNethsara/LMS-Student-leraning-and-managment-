import React, { useState } from 'react'
import axios from 'axios';
function Paymentmodal() {
    const [student_register_id, setStudentid] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState("paid");
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/payment', {
                student_register_id, amount, status, month, date

            });
            console.log('Response:', response.data);


        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);

        }
    }
    return (
        <div>
            <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">

                    <div class="relative bg-white rounded-lg shadow ">

                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-black">
                                Student Payments
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} class="p-5 mx-auto">

                            <div class="mb-5">
                                <label for="student_register_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Student ID</label>
                                <input type="number" value={student_register_id} onChange={(e) => setStudentid(e.target.value)} id="student_register_id" name="student_register_id" placeholder="Enter Student ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                            <div class="mb-5">
                                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Paymenet Amount</label>
                                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" name="amount" placeholder="Payment Amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div class="mb-5">
                                <select
                                    id="form-select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    name="status"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                >
                                    <option value="" disabled>
                                        Select Payment Status
                                    </option>
                                    <option value="paid">Paid</option>
                                    <option value="unpaid">UnPaid</option>
                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="valid_months" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">valid Months</label>
                                <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} id="valid_months" name='valid_months' placeholder="Enter Valid Months" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                            <div class="mb-5">
                                <label for="Payment_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">payment Date</label>
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} id="payment_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paymentmodal