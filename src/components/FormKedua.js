import React from 'react'
import { Input, Button, Select, Option } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function FormPertama() {
    return (
        <div>
            <form className="p-10">
                <div className='grid grid-row-5 gap-10 z-50'>
                    <div>
                        <Input label="Full name" variant="outlined" type="text" className="form-control" />
                    </div>
                    <div>
                        <Input label="Email" variant="outlined" type="email" className="form-control" />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <Select label="Tlp">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                        <Input label="Business phone number" variant="outlined" type="number" className="form-control" />
                    </div>

                    <div>
                        <Input label="files" variant="outlined" type="file" className="form-control" />
                    </div>
                    <div className='justify-center mr-10 '>
                        <Button className='z-96' variant="gradient" fullWidth>
                            Next
                        </Button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default FormPertama