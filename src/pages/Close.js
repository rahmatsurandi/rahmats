import React from 'react'
import Icon9 from '../asset/icon9'
import Elips from '../asset/elipse'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export default function Close() {
    return (
        <div>
            <div>
                <h1 className=" absolute z-10 p-20"><Icon9 /></h1>
                <h1 className=" absolute-z-10 -mt-2"><Elips /></h1>
            </div>
            <div className="-mt-44 ">
                <img className="mx-auto" src='images/image1.png' />
                <h1 className="text-center font-extrabold text-5xl text-purple-600">Your request has been submitted</h1>
                <p className="text-center font-bold text-blue-400">We will notify you for further update max 2x24</p>
                <p className='text-center'>
                    <Button className="" variant="gradient" size="lg"><Link to='/'>Back to home</Link></Button>

                </p>

            </div>
        </div>
    )
}
