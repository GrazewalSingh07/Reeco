import React from 'react'
import { Header } from '../components/header/Header'
import { DetailPanel } from '../components/DetailPanel'
import { MyTableBody } from '../components/MyTableBody'

export const Home = () => {
  return (
    <div className='text-center !m-auto '>
        <Header/>
        <div className='max-w-[1600px] m-auto'>
        <DetailPanel/>
        <MyTableBody/>
        </div>
     
    </div>
  )
}
