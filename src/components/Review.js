import React from 'react'
import Elips from '../asset/elipse'
import Icon9 from '../asset/icon9'
import { FcBusiness } from "react-icons/fc";
import { BiData } from "react-icons/bi";
import Line from '../asset/Line'
import { BiUserCircle } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";



export default function Review() {
    return (
        <div className="">
            <div classname="bg-blue-600">
                <div>
                    <h1 className=" absolute z-10 p-20"><Icon9 /></h1>
                    <h1 className=" absolute-z-10 -mt-2"><Elips /></h1>
                </div>
                <div className='absolute z-40 container-md p-20 -mt-80 flex justify-center'>
                    <div className="flex justify-center items-center"><FcBusiness className="width-10 " size='4em' color='grey' />
                    </div>
                    <div className="flex-1"><h1 className=" text-blue-500 font-mono font-black">Owner information</h1>
                        <div className="w-1/2"><p className=" text-blue-300 font-mono font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p></div>
                    </div>
                </div>
                <div className='absolute z-20 container-md p-28 -mt-72 '>
                    <Line />
                </div>
                <div className='absolute z-40 container-md p-20 -mt-56 flex justify-center'>
                    <div className="flex justify-center items-center"><BiData className="width-10 " size='4em' color='grey' />
                    </div>
                    <div className="flex-1"><h1 className=" text-blue-500 font-mono font-black">Business Information</h1>
                        <div className="w-1/2"><p className=" text-blue-300 font-mono font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p></div>
                    </div>
                </div>
                <div className='absolute z-20 container-md p-28 -mt-48 '>
                    <Line />
                </div>
                <div className='absolute z-40 container-md p-20 -mt-32 flex justify-center'>
                    <div className="flex justify-center items-center"><BiUserCircle className="width-10 " size='4em' color='grey' />
                    </div>
                    <div className="flex-1"><h1 className=" text-blue-500 font-mono font-black">Account information</h1>
                        <div className="w-1/2"><p className=" text-blue-300 font-mono font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p></div>
                    </div>
                </div>
                <div className='absolute z-10 container-md p-28 -mt-24  '>
                    <Line />
                </div>
                <div className='absolute z-20 container-md p-20 -mt-8 flex justify-center'>
                    <div className="flex justify-center items-center"><BsFillEyeFill className="width-10" size='4em' color='grey' />
                    </div>
                    <div className="flex-1"><h1 className=" text-blue-500 font-mono font-black">Review</h1>
                        <div className="w-1/2"><p className=" text-blue-300 font-mono font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eros erat mauris mi.</p></div>
                    </div>
                </div>
            </div>
        </div>





    )
}
