import React from 'react'
import Breadcumb from '../Breadcumb';

import Tasktable from '../Task-manager/Tasktable';
import Model from '../Task-manager/Model';

function Task() {
  const breadcumbItems = [
    { label: 'Home', link: '#', icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' },
    { label: 'Task manager' },
  ];
  return (
    <div>
      <div style={{ width: '100%' }} className="flex justify-between items-center">
        <h3 style={{ fontSize: '25px', color: '#6a6b6b', fontFamily: '"Poppins", serif', }} className="m-4 font-semibold ml-5">
          Task manager
        </h3>
        <Breadcumb items={breadcumbItems} />
      </div>

      <div className='grid col-span-1'>
        <Model />
        <div style={{ width: '100%' }} className='Taskdash'>
          <Tasktable />
        </div>
      </div>




    </div>
  )
}

export default Task