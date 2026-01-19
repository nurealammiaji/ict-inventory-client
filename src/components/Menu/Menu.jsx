import React from 'react';
import { NavLink } from 'react-router-dom';
import { PiGear, PiHandArrowDown, PiHouse, PiLaptop, PiMagnifyingGlass, PiSticker } from "react-icons/pi";

const Menu = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-3'>
                <div className='h-16 w-16'>
                    <img src="./dscsc.png" className='w-full h-full' alt="" />
                </div>
            </div>
            <ul className="menu w-full grow *:m-2">
                <br />
                {/* List item First */}
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'bg-info text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Homepage">
                        <PiHouse className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Homepage</span>
                    </NavLink>
                </li>

                {/* List item 2 */}
                <li>
                    <NavLink to={"/loan-register"} className={({ isActive }) => isActive ? 'bg-info text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Loan Register">
                        <PiHandArrowDown className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Loan Register</span>
                    </NavLink>
                </li>

                {/* List item 3 */}
                <li>
                    <NavLink to={"/laptop-register"} className={({ isActive }) => isActive ? 'bg-info text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Laptop Register">
                        <PiLaptop className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Laptop Register</span>
                    </NavLink>
                </li>

                {/* List item 4 */}
                <li>
                    <NavLink to={"/search-items"} className={({ isActive }) => isActive ? 'bg-info text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Search Items">
                        <PiMagnifyingGlass className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Search Items</span>
                    </NavLink>
                </li>

                {/* List item 5 */}
                <li>
                    <NavLink to={"/stickers"} className={({ isActive }) => isActive ? 'bg-info text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Stickers">
                        <PiSticker className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Stickers</span>
                    </NavLink>
                </li>

                {/* List item Last */}
                <li>
                    <NavLink to={"/settings"} className={({ isActive }) => isActive ? 'bg-info text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Settings">
                        <PiGear className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Settings</span>
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
        </div>
    );
};

export default Menu;