import React from 'react';

const Stickers = () => {
    return (
        <div>
            <div>
                <div className='divider w-1/2 mx-auto'>
                    <h2 className='text-xl font-semibold'>Stickers</h2>
                </div>
            </div>
            <div className='mt-14 w-[80%] mx-auto flex justify-center'>
                <div>
                    <img
                        className="mask mask-square"
                        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
                </div>
            </div>
        </div>
    );
};

export default Stickers;