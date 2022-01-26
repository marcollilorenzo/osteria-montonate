import React from 'react';

function Loading() {
    return (
        <div className='absolute top-0 w-full h-screen bg-lightBrown flex justify-center items-center'>
            <p className='animate animate-pulse text-2xl font-bold'>Loading</p>
        </div>
    );
}

export default Loading;
