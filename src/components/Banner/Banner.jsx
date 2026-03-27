import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import heroImg from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className=" text-center">
      <h2 className="text-6xl font-bold">
        We Build <br />
        <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps
      </h2>
      <p className="mt-4 mb-10 text-gray-600">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <section >
        <button className="mr-4 btn"><FaGooglePlay className="text-green-700 text-xl "/> Google Play</button>
        <button className="btn"><FaAppStore className="text-blue-700 text-xl " /> App Store</button>
      </section>
      <img src={heroImg} alt="Hero Image" className="max-w-lg md:max-w-2xl mx-auto mt-10" />
    </div>
  );
};

export default Banner;
