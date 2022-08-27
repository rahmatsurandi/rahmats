import React from 'react'
import { Input, Button, Select, Option } from '@material-tailwind/react'

function FormPertama() {
    return (
        <div>
            <form className="p-10">
                <div className='grid grid-row-5 gap-10 z-50'>
                    <div>
                        <Input label="Business name" variant="outlined" type="text" className="form-control" />
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <Select label="Tlp">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                        <Input label="Business phone number" variant="outlined" type="number" className="form-control" />
                    </div>
                    <div className='grid grid-cols-3 gap-1'>
                        <Select label="Country">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                        <Select label="Province/state">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                        <Select label="City">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>

                    </div>
                    <div>
                        <Input label="Complete Address" variant="outlined" type="text" className="form-control" />
                    </div>
                    <div >
                        <Input label="PIN location" variant="outlined" type="tel" className="form-control" />
                    </div>
                    <div>
                        <Input label="files" variant="outlined" type="file" className="form-control" />
                    </div>
                    <div>
                        <Button className='' >Next</Button>
                    </div>
                </div>
            </form >

        </div>



    )
}

export default FormPertama