import './App.css'
import Footer from './components/Footer/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb'

function App() {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="layout-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300 h-20">
            <label htmlFor="layout-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg> */}
              <TbLayoutSidebarLeftExpand className='text-warning text-2xl'/>
            </label>
            <div className="px-4 text-2xl font-semibold">ICT Inventory</div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label htmlFor="layout-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-24 is-drawer-open:w-72">
            {/* Sidebar content here */}
            <Menu />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
