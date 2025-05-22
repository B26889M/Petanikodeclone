import Youtube from '../assets/img/YoutubeButton.svg'
import Instagram from '../assets/img/InstragramButton.svg'
import Facebook from '../assets/img/FacebookButton.svg'
import Twitter from '../assets/img/TwitterButton.svg'
import Telegram from '../assets/img/TelegramButton.svg'



export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 outline-zinc-700 outline-2">
      <div className="text-center space-y-4">
        <p className="text-slate-300">Ikuti Kami di</p>
        <div className="flex justify-center space-x-4">
          <a href="#"><div className="bg-slate-700 rounded-full p-2 w-10 h-10 items-center flex justify-center hover:bg-blue-900"><i> <img src={Facebook} alt="" className='items-center flex justify-center'/></i></div></a>
          <a href="#"><div className="bg-slate-700 rounded-full p-2 w-10 h-10 items-center flex justify-center hover:bg-blue-600"><i> <img src={Twitter} alt="" className='items-center flex justify-center'/></i></div></a>
          <a href="#"><div className="bg-slate-700 rounded-full p-2 w-10 h-10 items-center flex justify-center hover:bg-blue-600"><i> <img src={Telegram} alt="" className='items-center flex justify-center'/></i></div></a>
          <a href="#"><div className="bg-slate-700 rounded-full p-2 w-10 h-10 items-center flex justify-center hover:bg-pink-500"><i> <img src={Instagram} alt="" className='items-center flex justify-center'/></i></div></a>
          <a href="#"><div className="bg-slate-700 rounded-full p-2 w-10 h-10 items-center flex justify-center hover:bg-red-600"><i> <img src={Youtube} alt="" className='items-center flex justify-center'/></i></div></a>
          
        </div>
        <p className="text-slate-400 text-sm">
          © 2025 <a href="" className='text-white hover:text-cyan-400 font-semibold text-sm/6'>Money</a> · Made with <span className="text-red-500">❤️</span> using <a href="" className='text-white hover:text-cyan-400 font-semibold '>Hugo 0.134.0</a>
        </p>
      </div>
    </footer>
  );
}