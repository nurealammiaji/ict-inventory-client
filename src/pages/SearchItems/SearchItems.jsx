import React from 'react';

const SearchItems = () => {
    return (
        <div>
            <div>
                <div className='divider w-1/2 mx-auto'>
                    <h2 className='text-xl font-semibold'>Search Items</h2>
                </div>
            </div>
            <div className='mt-14 w-[80%] mx-auto flex justify-center'>
                <div className='w-full'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SearchItems;