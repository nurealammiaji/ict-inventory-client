import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <ul className="menu w-full grow">
            {/* List item 1 */}
            <li>
                <NavLink to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                    {/* Home icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    <span className="is-drawer-close:hidden">Homepage</span>
                </NavLink>
            </li>

            {/* List item 2 */}
            <li>
                <NavLink to={"/settings"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                    {/* Settings icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    <span className="is-drawer-close:hidden">Settings</span>
                </NavLink>
            </li>

            {/* <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-success'>11</span> Student Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-success">
                        <li>
                            <NavLink to={"/students/add"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    --
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/search"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    ==
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/all"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    ++
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div> */}
        </ul>
    );
};

export default Menu;