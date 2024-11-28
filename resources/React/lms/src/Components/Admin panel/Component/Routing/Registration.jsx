import React, { useState } from 'react'
import '../Routing/Adminpanel.scss';
function Registration() {
    return (
        <div className='register-main'>
            <div className="head">
                <h3 className=' font-bold  m-5 text-xl  text-slate-800 '>Registration</h3>
            </div>
            <div className="upsection ">

                <form  >
                    <div class="items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Add Firstname</label>
                        <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Smith" required />
                    </div>
                    <div class="items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Add Middlename</label>
                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                    </div>
                    <div class=" items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Add lastname</label>
                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                    </div>

                </form>

            </div>
            <div className="upsection ">
                <form  >
                    <div class="items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Add email</label>
                        <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Smith" required />
                    </div>
                    <div class="items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                    </div>
                    <div class=" items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Selected Corces</label>
                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                    </div>

                </form>

            </div>
            <div className="downsection ">
                <form  >
                    <div class="items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                        <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Smith" required />
                    </div>
                    <div class="items m-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Other Qulifications</label>
                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frenando" required />
                    </div>


                </form>
            </div>
            <form className="max-w-lg  ml-4">
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
                />
                <div
                    className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                    id="user_avatar_help"
                >
                    A profile picture is useful to confirm you are logged into your account
                </div>
            </form>

            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-20 ml-4">Submit Details</button>
         

        </div>
    )
}

export default Registration