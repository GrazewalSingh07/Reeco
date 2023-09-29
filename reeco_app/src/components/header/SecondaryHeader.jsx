import { Button } from '@mui/material'
import React from 'react'
import {BsChevronRight} from 'react-icons/bs'
export const SecondaryHeader = () => {
  return (
    <div className='max-w-[1600px] m-auto p-2'>
        <div className='flex items-center justify-around max-w-[210px]'>
            <p>Order </p>
            <BsChevronRight/>
            <p>Order-123456</p>
        </div>

        <div className='flex justify-between p-2 w-full '>
            <h1 className='text-3xl'>Order-123456</h1>
            <div className='flex w-[20%] justify-around '>
                <Button className='!rounded-3xl !border-1 !border-green-800 !border-solid !text-green-800' variant='outlined'>Back</Button>
                <Button className='!rounded-3xl !bg-green-800 !text-white' variant='contained'>Approve order</Button>
            </div>
        </div>
    </div>
  )
}
