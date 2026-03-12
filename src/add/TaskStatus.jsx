import React from 'react';

const TaskStatus = ({btnProgress, addTask, addResolved, setResolved}) => {
    return (
        <div className='bg-white rounded-lg flex flex-col gap-3 p-3'>
            <h2 className='font-semibold'>{addTask.title}</h2>
            <button onClick={()=>addResolved(addTask)} className='btn btn-dash btn-success'>Complete</button>
            {/* {
                console.log(addTask)
            } */}
        </div>
    );
};

export default TaskStatus;