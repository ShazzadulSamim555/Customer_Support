import React from 'react';

const ResolvedTask = ({ addResolve }) => {
  return (
    <div className='bg-white rounded-lg flex flex-col gap-3 p-3 shadow-sm border-l-4 border-green-500'>
      <h2 className='font-semibold text-gray-700'>{addResolve.title}</h2>
      <p className='text-xs text-green-600 font-bold'>✓ Completed</p>
    </div>
  );
};

export default ResolvedTask;