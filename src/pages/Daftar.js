import React from 'react'
import Review from '../components/Review'
import FormKedua from '../components/FormKedua';
import Icon9 from '../asset/icon9';
import { Link } from 'react-router-dom';



export default function Daftar() {
    return (
        <div className='container-lg m-10'>
            <div className='container-xl'>
                <nav className="px-10 py-10 bg-slate-400 flex">
                    <div className="flex-1"><Icon9 /></div>
                    <div><Link to='/inputName' className='text-16px w-10 font-sans text-lg '>Next</Link>
                    </div>
                </nav>
            </div>
            <div className='grid grid-row-1 gap-10'>
                <div className='grid grid-cols-2'>
                    <div className='p-10 bg-gray-100'>
                        <Review />
                    </div>
                    <div className='p-10 bg-gray-50'>
                        <FormKedua />
                    </div>
                </div>

            </div>

        </div>





    )
}
