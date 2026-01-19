import React from 'react';
import { PiFilePlus, PiPlusSquare } from 'react-icons/pi';
import LoanRegisterForm from '../../components/LoanRegisterForm/LoanRegisterForm';
import { ToastContainer } from 'react-toastify';

const LoanRegister = () => {
    return (
        <div>
            <ToastContainer />
            <div>
                <div className='divider w-1/2 mx-auto'>
                    <h2 className='text-xl font-semibold'>Loan Register</h2>
                </div>
            </div>
            <br />
            <div className='mt-14'>
                <div>
                    <button className="btn btn-lg btn-info" onClick={() => document.getElementById('new_loan_register_modal').showModal()}><PiPlusSquare className='text-2xl mr-2' /> <span className='text-xl'>New Loan</span></button>
                    <dialog id="new_loan_register_modal" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                            </form>
                            <h3 className="font-bold text-lg">New Loan</h3>
                            <div className='divider'></div>
                            <div className="py-4">
                                <LoanRegisterForm />
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default LoanRegister;