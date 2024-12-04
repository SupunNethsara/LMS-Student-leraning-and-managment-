import React from 'react'
import Button from '@mui/material/Button';
function Jumbotron() {
    return (
        <div>
            <div style={{borderRadius:'20px', backgroundImage: "linear-gradient(rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url('education3.jpg')"}} className="Welcome-section bg-cover p-8 text-white m-3">
                <div className="contentsec text-center flex flex-col items-center">
                    <img className="w-17 h-17 mb-4" src="ucsc-logo.png" alt="" />
                    <h3 className="text-lg leading-10">University of Colombo School of Computing</h3>
                    <h4 className="text-xl leading-10">
                        Welcome to the Virtual Learning Environment for the BIT Students
                    </h4>
                    <h4 className="text-sm leading-8">
                        BIT සිසුන් සඳහා වූ අතථ්‍ය ඉගෙනුම් පරිස්ථිතියට ඔබව සාදරයෙන් පිළිගනිමු!
                    </h4>
                    <h4 className="text-sm leading-8">
                        BIT மாணவர்களை மெய்நிகர் கற்றல் சுற்றுச்சூழல்ற்கு வரவேற்கிறோம்!
                    </h4>
                    <h2 className="text-3xl leading-[60px] font-md">Academic Year 2024</h2>
                    <button className="mt-4 w-[200px] px-4 py-2 bg-blue-600 text-white rounded">
                        Visit Announcement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron