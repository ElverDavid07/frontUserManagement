"use client"
import {useParams} from 'next/navigation'
import {useGetDataUserQuery} from '../../StateGlobal/Slices/ApiSlice'
const Navbar = () => {
/*   const {id} = useParams()
const {data} = useGetDataUserQuery(id)
console.log(data)
console.log("el",id) */
  return (
    <>
    <h2>navbar</h2>
    </>
  )
}

export default Navbar