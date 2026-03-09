import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-amber-100 py-4 ubuntu '>
            <div className='md:flex justify-between items-center max-w-11/12 mx-auto text-center'>
                <h3 className='flex-1 text-2xl font-bold md:text-left'>CS- Ticket System</h3>
                <div className='md:flex flex-wrap justify-between items-center flex-1'>
                    <p>Home</p>
                    <p>FAQ</p>
                    <p>ChangeLog</p>
                    <p>Blog</p>
                    <p>Download</p>
                    <p>Contact</p>
                    <button type='button' className='btn btn-active text-white font-bold bg-gradient-to-r from-cyan-400 to-cyan-900'>+ New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;