import React from 'react';
import { PiPlusSquare } from 'react-icons/pi';

const Consumers = () => {
    return (
        <div>
            <div className='mt-14'>
                <div>
                    <button className="btn btn-lg btn-info" onClick={() => document.getElementById('new_consumer_modal').showModal()}><PiPlusSquare className='text-2xl mr-2' /> <span className='text-xl'>New Consumer</span></button>
                    <dialog id="new_consumer_modal" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                            </form>
                            <h3 className="font-bold text-lg">New Consumer</h3>
                            <div className='divider'></div>
                            <div className="py-4">

                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Consumers;