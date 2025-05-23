import { FaArrowRightLong } from "react-icons/fa6";
import './HomeBanner.css'; // ✅ Import the external CSS
import Firstgirl from '../../public/firstgirl.png';
import secondGirl from '../../public/secondGirl.png';

const HomeBanner = () => {
    return (
        <div id="home" className="home-banner w-full  h-[1608px] relative md:rounded-br-[400px] md:rounded-tr-[400px] rounded-br-[196px] rounded-tr-[186px]  bg-[#0A3F36]">
            <div className="top-section lg:mx-[100px] md:mx-[70px] mx-[50px]">
                <div className="text-white absolute w-[80%] flex flex-col gap-5">
                    <h1 className="text-7xl sugarfont w-[700px] mt-[70px] font-medium">
                        Where Elegance <br />
                        Meets Effortless Luxury
                    </h1>
                    <p className="w-[650px] jishnufont text-[18px]">
                        Zorucci brings you designer bridal wear that radiates elegance without the stress of owning. Experience effortless luxury, flawless fits, and unforgettable style. Because <br />
                        your big day deserves more than a dress, it deserves a moment of magic.
                    </p>
                   <a href="#collections" className="w-fit ">
  <button className="flex border w-fit px-5 py-4 bg-white/10 cursor-pointer hover:bg-white/20 text-center items-center gap-5">
    Explore Our Collections <FaArrowRightLong />
  </button>
</a>

                </div>
                <div className="w-[450px] firstgirl absolute right-20 -top-20">
                    <img src={Firstgirl} alt="First Girl" />
                </div>
            </div>

            <div className="bottom-section top-[800px] flex justify-between absolute lg:mx-[100px] md:mx-[70px] mx-[50px]">
                <div className="w-[450px] left-20">
                    <img src={secondGirl} alt="Second Girl" />
                </div>
                <div className="text-white flex flex-col gap-5">
                    <h1 className="text-7xl sugarfont w-[800px] mt-[70px] font-medium">
                        Luxury You Borrow, <br />
                        Elegance You Own.
                    </h1>
                    <p className="w-[650px] jishnufont text-[18px]">
                        Zorucci redefines bridal elegance with luxury rentals that make style effortless and accessible. Our curated collection blends tradition with modern charm, allowing brides to shine without the commitment of ownership. With a seamless rent, wear, and return experience, designer fashion is yours—without the high price.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
