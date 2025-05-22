import Logo from '../assets/img/Logo.svg'
import Buku from '../assets/img/Buku.svg'
import Discord from '../assets/img/Discord.svg'
import light from '../assets/img/light.png'
// import night from '../assets/img/night.svg'
import PlayButton from '../assets/img/PlayButton.svg'
import PageButton from '../assets/img/PageButton.svg'
import HomeButton from '../assets/img/HomeButton.svg'
import Search from '../assets/img/Search.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-teal-900 text-white sticky top-0 z-40 shadow-md">
            <div className="container mx-auto py-4 font-sans font-bold text-white flex justify-between items-center">
                <div className="kiri flex items-center">
                    <a href=""><img src={Logo} alt="" className='rounded-2x1 size-7 mx-5 hover:bg-black pointer-c:'/></a>
                    <ul className='flex gap-0.5 mt-0.5'>
                        <li className='flex bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center space-x-2'><img src={HomeButton} alt=""className='size-5 mx-1.5 mt-0.5' /><a href="">Home</a></li>
                        <li className='flex bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center space-x-2'><img src={PlayButton} alt="" className='size-5 mx-1.5 mt-0.5'/><a href="">Kelas</a></li>
                        <li className='flex bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center space-x-2'><img src={PageButton} alt=""className='size-5 mx-1.5 mt-0.5'/><a href="">Tutorial</a></li>
                        <li className='flex bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center space-x-2'><img src={Buku} alt="" className='size-5 mx-1.5 mt-0.5'/><a href="">Buku</a></li>
                        <li className='flex bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center space-x-2'><img src={Discord} alt="" className='size-5 mx-1.5 mt-0.5'/><a href="">Discord</a></li>
                    </ul>
                </div>
                <div className="kanan flex justify-end items-center">
                    <ul className='flex '>
                        <li><a href=""><img src={Search} alt="" className='size-5 mx-1.5 mt-0.5'/>
                            </a></li>
                        <li><a href=""><img src={light} alt="" className='size-5 mx-1.5 mt-0.5'/>
                            </a></li>
                        <li><a href="" className='bg-teal-500 hover:bg-teal-700 text-white font-semibold py-1 px-3 rounded-xl flex items-center space-x-2'>Join Newsletter</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;