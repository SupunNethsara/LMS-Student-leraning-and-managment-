import React from 'react';

export default function TaskDetailsModal({ CloseTaskAbout, tasks }) {
  return (
    <div 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} 
      id="static-modal" 
      data-modal-backdrop="static" 
      tabIndex="-1" 
      aria-hidden="true"
    >
            {tasks.map((task) => (
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-lg">
       
          <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
            {task.projectname}
            </h3>
            <button 
              onClick={CloseTaskAbout} 
              type="button" 
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

    
          <div className="p-4 space-y-4">
            <div className="mb-4">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                High Priority
              </span>
              <p className="text-gray-600 mt-2">{task.closingdate}</p>
            </div>

            <div className="border-t border-b border-gray-200 py-4">
              <p className="text-gray-700 mb-4">
               {task.projecttitle}
              </p>
              <p className="text-gray-500 italic"> {task.projectview}</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Following features need to be add in the app:</h4>
              
             

              <div className="ml-6 space-y-2">
               
                <p className="text-gray-600">{task.description}</p>
                
          
              </div>
            </div>
          </div>

          
          <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
            <span className="text-sm text-gray-500">Track In GitHub</span>
          </div>
        </div>
      </div>
           ))}
    </div>
    
  );
}