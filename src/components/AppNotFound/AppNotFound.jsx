
import { Link } from 'react-router'
import notFoundImg from '../../assets/App-Error.png'

const AppNotFound = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src={notFoundImg} alt="Not Found Image" className='max-w-sm' />
        <h3 className='text-3xl font-semibold my-4'>OPPS!! APP NOT FOUND</h3>
        <p className='text-sm text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
        <Link className='my-4' to='/'><button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>Go Back</button></Link>
    </div>
  )
}

export default AppNotFound