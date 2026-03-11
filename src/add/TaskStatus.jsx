import React from 'react';

const TaskStatus = () => {
    return (
        <div className='bg-white rounded-lg flex flex-col gap-3 p-3'>
            <h2 className='font-semibold'>Title</h2>
            <button className='btn btn-dash btn-success'>Complete</button>
        </div>
    );
};

export default TaskStatus;