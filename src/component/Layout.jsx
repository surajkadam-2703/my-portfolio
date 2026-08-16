import React from 'react'
import Navbar from './Navbar'
import Asidebar from './Asidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

function Layout() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>

                <Navbar />

                <div className='pt-12 flex flex-1'>
                    <section className='sticky top-12 h-[calc(100vh-3rem)] md:w-[27%] lg:w-[280px] hidden md:block'>
                        <Asidebar />
                    </section>


                    {/* Right section */}
                    <section className='overflow-x-hidden flex-1 m-5 lg:m-8'>
                        <Outlet />
                    </section>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Layout
