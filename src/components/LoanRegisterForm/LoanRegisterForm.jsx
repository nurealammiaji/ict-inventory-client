import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LoanRegisterForm = () => {

    const [version, setVersion] = useState();
    const notify = () => toast('Added Successfully !');

    const classesBV = [
        {
            id: 1,
            name: "One",
        },
        {
            id: 2,
            name: "Two",
        },
        {
            id: 3,
            name: "Three",
        },
        {
            id: 4,
            name: "Four",
        },
        {
            id: 5,
            name: "Five",
        },
    ];

    const classesEV = [
        {
            id: 1,
            name: "One EV",
        },
        {
            id: 2,
            name: "Two EV",
        },
        {
            id: 3,
            name: "Three EV",
        },
        {
            id: 4,
            name: "Four EV",
        },
        {
            id: 5,
            name: "Five EV",
        },
    ];

    const sessions = [
        {
            id: 1,
            name: "2024"
        },
        {
            id: 2,
            name: "2025"
        }
    ];

    const versions = [
        {
            id: 1,
            name: "Bangla"
        },
        {
            id: 2,
            name: "English"
        }
    ];

    const sections = [
        {
            id: 1,
            name: "A"
        },
        {
            id: 2,
            name: "B"
        },
        {
            id: 3,
            name: "C"
        },
        {
            id: 4,
            name: "D"
        }
    ];

    const seats = [
        {
            id: 1,
            name: "General"
        },
        {
            id: 3,
            name: "Standard"
        },
        {
            id: 3,
            name: "Premium"
        },
        {
            id: 4,
            name: "Deluxe"
        }
    ];

    const beds = [
        {
            id: 1,
            name: "Lower"
        },
        {
            id: 2,
            name: "Middle"
        },
        {
            id: 3,
            name: "Upper"
        }
    ];

    const breakfast = [
        {
            id: 1,
            name: "Parata + Bhaji"
        },
        {
            id: 2,
            name: "Parata + Egg Fry"
        },
        {
            id: 3,
            name: "Noddles"
        },
        {
            id: 4,
            name: "Khichuri"
        }
    ];

    const lunch = [
        {
            id: 1,
            name: "Rice + Egg"
        },
        {
            id: 2,
            name: "Rice + Chicken"
        },
        {
            id: 3,
            name: "Rice + Beef"
        },
        {
            id: 4,
            name: "Rice + Mutton"
        }
    ];

    const snacks = [
        {
            id: 1,
            name: "Cake"
        },
        {
            id: 2,
            name: "Puri"
        },
        {
            id: 3,
            name: "Egg"
        }
    ];

    const dinner = [
        {
            id: 1,
            name: "Rice + Vegetables"
        },
        {
            id: 2,
            name: "Rice + Chicken"
        },
        {
            id: 3,
            name: "Rice + Beef"
        },
        {
            id: 4,
            name: "Rice + Mutton"
        }
    ];

    const handleVersion = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setVersion(e.target.value);
    }

    const handleStudentAddForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const student = {
            studentID: form.studentID.value,
            studentName: form.studentName.value,
            dob: form.dob.value,
            version: form.dob.value,
            studentClass: form.studentClass.value,
            session: form.session.value,
            section: form.section.value,
            seat: form.seat.value,
            bed: form.bed.value,
            breakfast: form.breakfast.value,
            lunch: form.lunch.value,
            snacks: form.snacks.value,
            dinner: form.dinner.value,
            father: form.father.value,
            mother: form.mother.value,
            guardian: form.mother.value,
            present: form.present.value,
            permanent: form.permanent.value,
        }
        console.log(student);
        document.getElementById("new_loan_register_modal").close();
        notify();
    }

    return (
        <div>
            <form onSubmit={handleStudentAddForm} className="bg-base-200 border-base-300 rounded-box border p-4">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='w-full'>
                        <label className="label">Student ID</label>
                        <input type="text" name='studentID' className="input w-full" placeholder="type student id here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Student Name</label>
                        <input type="text" name='studentName' className="input w-full" placeholder="type student name here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Date of Birth</label>
                        <input type="date" name='dob' className='input w-full' placeholder='type dob here' />
                    </div>
                    <div className='w-full'>
                        <label className="label">Version</label>
                        <select name='version' onChange={handleVersion} className='select w-full'>
                            <option value="" className='text-slate-400'>select version</option>
                            {
                                (versions) &&
                                versions.map((v, i) => <option key={i} value={v.name}>{v.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Class</label>
                        <select name='studentClass' className='select w-full'>
                            <option value="" className='text-slate-400'>select class</option>
                            {
                                (version && version === "English") &&
                                classesEV.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                            }
                            {
                                (version && version === "Bangla") &&
                                classesBV.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Session</label>
                        <select name='session' className='select w-full'>
                            <option value="" className='text-slate-400'>select session</option>
                            {
                                (sessions) &&
                                sessions.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Section</label>
                        <select name='section' className='select w-full'>
                            <option value="" className='text-slate-400'>select section</option>
                            {
                                (sections) &&
                                sections.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Seat</label>
                        <select name='seat' className='select w-full'>
                            <option value="" className='text-slate-400'>select seat</option>
                            {
                                (seats) &&
                                seats.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Bed</label>
                        <select name='bed' className='select w-full'>
                            <option value="" className='text-slate-400'>select bed</option>
                            {
                                (beds) &&
                                beds.map((b, i) => <option key={i} value={b.name}>{b.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Favorite Breakfast</label>
                        <select name='breakfast' className='select w-full'>
                            <option value="" className='text-slate-400'>select breakfast</option>
                            {
                                (breakfast) &&
                                breakfast.map((b, i) => <option key={i} value={b.name}>{b.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Favorite Lunch</label>
                        <select name='lunch' className='select w-full'>
                            <option value="" className='text-slate-400'>select lunch</option>
                            {
                                (lunch) &&
                                lunch.map((l, i) => <option key={i} value={l.name}>{l.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Favorite Snacks</label>
                        <select name='snacks' className='select w-full'>
                            <option value="" className='text-slate-400'>select snacks</option>
                            {
                                (snacks) &&
                                snacks.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Favorite Dinner</label>
                        <select name='dinner' className='select w-full'>
                            <option value="" className='text-slate-400'>select dinner</option>
                            {
                                (dinner) &&
                                dinner.map((d, i) => <option key={i} value={d.name}>{d.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Father's Name</label>
                        <input name='father' type="text" className="input w-full" placeholder="type father's name here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Mother's Name</label>
                        <input name='mother' type="text" className="input w-full" placeholder="type mother's name here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Guardian's Name</label>
                        <input name='guardian' type="text" className="input w-full" placeholder="type guardian's name here" />
                    </div>
                    <div className='w-full'>
                        <label className='label'>Present Address</label>
                        <textarea name='present' className='textarea w-full' placeholder='type address here'></textarea>
                    </div>
                    <div className='w-full'>
                        <label className='label'>Permanent Address</label>
                        <textarea name='permanent' className='textarea w-full' placeholder='type address here'></textarea>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoanRegisterForm;