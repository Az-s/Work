import { FaWhatsapp, FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import background from "../assets/background.png"

const InProgressMain = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-white sm:text-3xl">
          Наш сайт находится в разработке
        </h1>
      </div>
      <div className="text-center my-8">
        <p className="text-lg mb-4">Скоро открытие</p>
        <div className="w-full max-w-4xl bg-gray-300 rounded-full h-6 relative">
          <div
            className="bg-blue-500 h-6 rounded-full"
            style={{ width: "30%" }}
          ></div>
          <div className="absolute top-full left-0 mt-2 text-sm text-gray-400">
            0%
          </div>
          <div className="absolute top-full right-0 mt-2 text-sm text-gray-400">
            100%
          </div>
        </div>
      </div>
      <div className="text-center my-8">
        <ul className="flex justify-center space-x-4">
          <li>
            <div className="flex items-center justify-center w-12 h-12 border-1 border-white-500 rounded-full hover:bg-green-500 hover:text-white transition-colors cursor-pointer">
              <FaWhatsapp size={24} />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center w-12 h-12 border-1 border-white-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
              <FaTelegram size={24} />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center w-12 h-12 border-1 border-white-500 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 hover:text-white transition-colors cursor-pointer">
              <FaInstagram size={24} />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center w-12 h-12 border-1 border-white-500 rounded-full hover:bg-red-500 hover:text-white transition-colors cursor-pointer">
              <FaYoutube size={24} />
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center mt-6">
        <p className="text-md text-gray-300">
          @{new Date().getFullYear()} Сайт находится в разработке.
        </p>
      </div>
    </div>
  );
};

export default InProgressMain;
