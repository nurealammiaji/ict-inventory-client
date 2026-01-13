import React from 'react';
import { PiFilePlus, PiPlusSquare } from 'react-icons/pi';

const LoanRegister = () => {
    return (
        <div>
            <div>
                <div className='divider w-1/2 mx-auto'>
                    <h2 className='text-xl font-semibold'>Loan Register</h2>
                </div>
            </div>
            <br />
            <div className='mt-14'>
                <div>
                    <button className="btn" onClick={() => document.getElementById('new_loan_register_modal').showModal()}><PiPlusSquare className='text-lg' />

                        New Loan</button>
                    <dialog id="new_loan_register_modal" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">New Loan</h3>
                            <div className='divider'></div>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default LoanRegister;