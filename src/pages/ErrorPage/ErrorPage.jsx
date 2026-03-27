import { Link } from 'react-router'
import errorImg from '../../assets/error-404.png'

const ErrorPage = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <img src={errorImg} alt="error 404" />
        <h3 className='text-4xl'>Oops, page not found!</h3>
        <p className='text-gray-500 my-4'>The page you are looking for is not available.</p>
        <Link to='/'> <button className="btn  bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white">Go Back!</button></Link>
    </div>
  )
}

export default ErrorPage