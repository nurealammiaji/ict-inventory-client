import React from 'react';
import { PiPlusSquare } from 'react-icons/pi';

const LaptopRegister = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='divider w-1/2 mx-auto'>
                        <h2 className='text-xl font-semibold'>Laptop Register</h2>
                    </div>
                </div>
                <div className='mt-14'>
                    <div>
                        <button className="btn btn-lg btn-info" onClick={() => document.getElementById('new_laptop_register_modal').showModal()}><PiPlusSquare className='text-2xl mr-2' /><span className='text-xl'>New Laptop</span></button>
                        <dialog id="new_laptop_register_modal" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">New Laptop</h3>
                                <div className='divider'></div>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopRegister;