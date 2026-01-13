import React from 'react';
import { NavLink } from 'react-router-dom';
import { PiGear, PiHandArrowDown, PiHouse, PiLaptop } from "react-icons/pi";

const Menu = () => {
    return (
        <ul className="menu w-full grow">
            {/* List item First */}
            <li>
                <NavLink to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                    <PiHouse className='text-lg' />
                    <span className="is-drawer-close:hidden">Homepage</span>
                </NavLink>
            </li>

            {/* List item 2 */} 
            <li>
                <NavLink to={"/loan-register"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Loan Register">
                    <PiHandArrowDown className='text-lg' />
                    <span className="is-drawer-close:hidden">Loan Register</span>
                </NavLink>
            </li>

            {/* List item 3 */}
            <li>
                <NavLink to={"/laptop-register"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Laptop Register">
                    <PiLaptop className='text-lg' />
                    <span className="is-drawer-close:hidden">Laptop Register</span>
                </NavLink>
            </li>

            {/* List item Last */}
            <li>
                <NavLink to={"/settings"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                    <PiGear className='text-lg' />
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