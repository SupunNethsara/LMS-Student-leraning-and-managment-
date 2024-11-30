import React, { useState } from 'react'
import '../Routing/Adminpanel.scss';
import axios from 'axios';

function Registration() {
    //     const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

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
    const [profile, setProfile] = useState(null);

    const handleFileChange = (e) => {
        setProfile({ ...formData, profile: e.target.files[0] });
      }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                fname, mname, lname, email, password, corce,gender,contact, qulification,role,adress ,profile
               
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }

        //  
    };


    return (
        <div className='register-main'>
            <div className="head">
                <h3 className=' font-bold  m-5 text-xl  text-slate-800 '>Registration</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="upsection ">

                    <div className='form' >
                        <div  className="items m-5">
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Add Firstname</label>
                            <input type="text" id="first_name" value={fname} onChange={(e) => setfname(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Smith" required />
                        </div>
                        <div  className="items m-5">
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Add Middlename</label>
                            <input type="text" id="middle_name" value={mname} onChange={(e) => setMname(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                        </div>
                        <div className=" items m-5">
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Add lastname</label>
                            <input type="text" id="last_name" value={lname} onChange={(e) => setLname(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Silva" required />
                        </div>

                    </div>

                </div>
                <div className="upsection ">
                    <div className='form' >
                        <div  className="items m-5">
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Add email</label>
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Admin123@gmail.com" required />
                        </div>
                             <div class="items m-5">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Admin@345" required />
                            </div> 
                        {/* <PasswordInput onChange={(e) => setPassword(e.target.value)} /> */}
                        <div  className=" items m-5">
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Selected Corces</label>
                            <input type="text" id="corce" value={corce} onChange={(e) => setCorce(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Laravel and React" required />
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
                            <label for="contact"  className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                            <input type="number" id="qulification" value={contact} onChange={(e) => setContact(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+947645876" required />
                        </div>
                        <div className="items m-5">
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Other Qulifications</label>
                            <input type="text" id="qulification" value={qulification} onChange={(e) => setQelification(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="University Qlulification" required />
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
                            <label for="text"  className="block mb-2 text-sm font-medium text-gray-900">Adress</label>
                            <input type="text" id="qulification" value={adress} onChange={(e) => setAdress(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Newyork .14567" required />
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


                <button type="submit"  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-20 ml-4">Submit Details</button>

            </form>
        </div>



    )
}

export default Registration