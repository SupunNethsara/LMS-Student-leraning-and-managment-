import React, { useState, useEffect } from 'react'
import './Profile.scss'



function Profile() {

  const [profile, setProfile] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  return (
    <div  >
      {profile ? (
     <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80" tabindex="-1" aria-labelledby="drawer-right-label">
     <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-700 dark:text-gray-700">
       Profile Details
     </h5>
     <button
       type="button"
       data-drawer-hide="drawer-right-example"
       aria-controls="drawer-right-example"
       class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
     >
       <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path
           stroke="currentColor"
           stroke-linecap="round"
           stroke-linejoin="round"
           stroke-width="2"
           d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
         />
       </svg>
       <span class="sr-only">Close menu</span>
     </button>
   
     <div class="flex flex-col items-center mt-6">
       <div class="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
         <svg
           class="absolute w-28 h-28 text-gray-400 -left-2 top-0"
           fill="currentColor"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             fill-rule="evenodd"
             d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
             clip-rule="evenodd"
           ></path>
         </svg>
       </div>
       <p class="mt-4 text-lg font-medium text-gray-700 dark:text-gray-700">{profile.fname} {profile.lname}</p>
       <p class="text-sm text-gray-500 dark:text-gray-400">{profile.email}</p>
       <p class="text-sm text-gray-400 dark:text-gray-500">Student</p>
     </div>
   
    
     <div class="mt-6 space-y-4">
     <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-700">Gender:</span>
         <span class="text-sm text-gray-800 dark:text-gray-400">{profile.gender}</span>
       </div>
       <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-700">Phone:</span>
         <span class="text-sm text-gray-800 dark:text-gray-400">{profile.contact}</span>
       </div>
       <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-700">Location:</span>
         <span class="text-sm text-gray-800 dark:text-gray-400">{profile.adress}</span>
       </div>
       <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-700">Role:</span>
         <span class="text-sm text-gray-800 dark:text-gray-400">{profile.role}</span>
       </div>
       {/* <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Member Since:</span>
         <span class="text-sm text-gray-800 dark:text-gray-200">{profile.created_at}</span>
       </div> */}
       <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-700">Selected corces:</span>
         <span class="text-sm text-gray-800 dark:text-gray-400">{profile.corce}</span>
       </div>
       <div class="flex items-center justify-between">
         <span class="text-sm font-medium text-gray-600 dark:text-gray-700">Other Qulification:</span>
         <span class="text-sm text-gray-800 dark:text-gray-400">{profile.qulification}</span>
       </div>
     </div>
     <div class="mt-20">
  <h6 class="text-lg font-semibold text-gray-600 dark:text-gray-500">Recent Activities</h6>
  <ul class="mt-4 space-y-2">
    <li class="text-sm text-gray-500 dark:text-gray-500">
      Logged in from New York on Nov 30, 2024
    </li>
    <li class="text-sm text-gray-500 dark:text-gray-500">
      Completed "React Basics" course on Nov 28, 2024
    </li>
    <li class="text-sm text-gray-500 dark:text-gray-500">
      Attended "Weekly Sync Meeting" on Nov 25, 2024
    </li>
  </ul>
</div>


   </div>
   
    
      ) : (
        <p>Loading profile...</p>
      )}



    </div>

  );
}

export default Profile