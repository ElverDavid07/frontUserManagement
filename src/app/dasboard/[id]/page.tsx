"use client"
import {useParams} from 'next/navigation'
import Navbar from '../components/Navbar'
const page = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <>
    <Navbar/>
    </>
  )
}

export default page