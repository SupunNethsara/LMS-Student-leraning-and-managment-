import React, { useState } from 'react'
import '../Routing/Adminpanel.scss';
import axios from 'axios';
import Breadcumb from '../Breadcumb';

function Registration() {
//Props For sharing heading Title and brusms
    const breadcumbItems = [
        { label: 'Home', link: '#', icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' },
        { label: 'Registration' },
    ];

    const [fname, setfname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [corce, setCorce] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');
    const [qulification, setQelification] = useState('');
    const [role, setRole] = useState('');
    const [adress, setAdress] = useState('');
    const [profile, setProfile] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleFileChange = (e) => {
        console.log(e.target.files)
        setProfile(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                fname, mname, lname, email, password, corce, gender, contact, qulification, role, adress, profile

            });
            console.log('Response:', response.data);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);

        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);

        }

        //  
    };


    return (
        <div className='register-main'>
            <div style={{ width: '100%' }} className="flex justify-between items-center">
                <h3 style={{ fontSize: '25px', color: '#6a6b6b', fontFamily: '"Poppins", serif', }} className="m-4 font-semibold ml-5">
                    Registration
                </h3>
                <Breadcumb items={breadcumbItems} />
            </div>

            <form onSubmit={handleSubmit}>
                <div className="upsection ">

                    <div className='form' >
                        <div className="items m-5">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Add Firstname</label>
                            <input type="text" id="first_name" value={fname} onChange={(e) => setfname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Smith" required />
                        </div>
                        <div className="items m-5">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Add Middlename</label>
                            <input type="text" id="middle_name" value={mname} onChange={(e) => setMname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                        </div>
                        <div className=" items m-5">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Add lastname</label>
                            <input type="text" id="last_name" value={lname} onChange={(e) => setLname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Silva" required />
                        </div>

                    </div>

                </div>
                <div className="upsection ">
                    <div className='form' >
                        <div className="items m-5">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Add email</label>
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Admin123@gmail.com" required />
                        </div>
                        <div class="items m-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Admin@345" required />
                        </div>
                        {/* <PasswordInput onChange={(e) => setPassword(e.target.value)} /> */}
                        <div className="items m-5">
                            <label
                                htmlFor="gender"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Selected Corces
                            </label>
                            <select
                                id="corce"
                                value={corce}
                                onChange={(e) => setCorce(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            >
                                <option value="" disabled>
                                    Select your Corce
                                </option>
                                <option value="react">React Corce</option>
                                <option value="laravel">Laravel Corce</option>
                                <option value="full stack development">Full Stcak Devlopment </option>
                            </select>
                        </div>

                    </div>

                </div>
                <div className="downsection ">
                    <div className='form' >
                        <div className="items m-5">
                            <label
                                htmlFor="gender"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Gender
                            </label>
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            >
                                <option value="" disabled>
                                    Select your gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>


                        <div className="items m-5">
                            <label for="contact" className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                            <input type="number" id="qulification" value={contact} onChange={(e) => setContact(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+947645876" required />
                        </div>
                        <div className="items m-5">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Other Qulifications</label>
                            <input type="text" id="qulification" value={qulification} onChange={(e) => setQelification(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="University Qlulification" required />
                        </div>


                    </div>

                </div>
                <div className="downsection ">
                    <div className='form' >
                        <div className="items m-5">
                            <label
                                htmlFor="gender"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Role
                            </label>
                            <select
                                id="gender"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            >
                                <option value="" disabled>
                                    Select Your Role
                                </option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>

                            </select>
                        </div>


                        <div className="items m-5">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Adress</label>
                            <input type="text" id="qulification" value={adress} onChange={(e) => setAdress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Newyork .14567" required />
                        </div>


                    </div>

                </div>


                <div className="max-w-lg ml-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="user_avatar"
                    >
                        Upload file
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <div
                        className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                        id="user_avatar_help"
                    >
                        A profile picture is useful to confirm you are logged into your account
                    </div>
                </div>

                {showToast && (
                    <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 mt-10 " role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Success alert!</span> New Student Data is submitted .
                        </div>
                    </div>
                )}
                <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  ml-1 mt-15 mr-10 float-right">Submit Details</button>

            </form>
        </div>



    )
}

export default Registration