import React from 'react'
import { Input, Button, Select, Option } from '@material-tailwind/react'

function FormKetiga() {
    return (
        <div>
            <form className="p-10">
                <div className='grid grid-row-3 gap-10 z-50'>
                    <div>
                        <Input label="Email" variant="outlined" type="email" className="form-control" />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <Select label="Tlp">
                            <Option>+62</Option>
                        </Select>
                        <Input label="Business phone number" variant="outlined" type="number" className="form-control" />
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

export default FormKetiga