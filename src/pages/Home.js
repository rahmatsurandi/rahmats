import { Button } from '@material-tailwind/react'
import React from 'react'
import Vector1 from '../asset/vector1'
import Vector from '../asset/Vector'
import Elips7 from '../asset/elips7'
import MainNavbar from '../components/MainNavbar'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div classname="bg-blue-200">
            <MainNavbar />
            <div className="mx-96">
                <h1 className='font-normal font-serif text-center text-bold text-6xl text-align-center p-2 capitalize'>Tired of the old way of selling online?</h1>
                <p className=' font-sans text-center  text-align-center text-blue-300 mt-10'>Try BIG Tenant, feel the new experience of online selling in virtual world. Register, earn money, and lets get rich! </p>
            </div>
            <div className='mx-96 mt-2'>
                <Button className="align-center text-center h-17 font-serif text-xl" fullWidth color="blue" variant='gradient' size='sm'><Link to="/daftar">Register Now</Link></Button>
            </div>

            <div className="p-4 mt-20 grid grid-cols-3 gap-4">

                <div className="h-15 m-auto aspect-square">
                    <Vector1 className=" bg-white" />
                    <div className="mt-10 bg-white z-10">
                        <p className=" h-9 text-xl font-serif text-blue-600">Total income</p>
                        <p className="text-3xl font-sans text-black font-extrabold">Rp. 3.500.000,-</p>
                    </div>
                </div>
                <div className="h-15 mt-0 aspect-square flex ">
                    <div className='flex-1/4  z-10'><img src='images/3.png' /></div>
                    <div className="flex-1/2 -m-20 mt-10"><img src='images/02.png' /></div>
                </div>
                <div className="h-15 -mt-0 -z-10 aspect-square "><Vector className='' /></div>
            </div>

            <div className="-z-30 mt-96 absolute inset-x-0 bottom-0 flex justify-start right-15">
                <div className="mt-52">
                    <Vector />
                </div>
                <div className=" mt-32">
                    <Elips7 />
                </div>

            </div>

        </div>

    )
}
