import React from 'react'
import Icon9 from '../asset/icon9'
function MainNavbar() {
    return (
        <div className='container-xl'>
            <nav className="px-10 py-10 bg-slate-400 flex">
                <div className="flex-1"><Icon9 /></div>
                <div><a href='/' className='text-16px w-10 font-sans text-lg '>Back to main page</a>
                </div>
            </nav>
        </div>
    )
}

export default MainNavbar