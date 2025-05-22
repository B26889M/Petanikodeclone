import Coding from '../assets/img/Coding.svg'
import PetaniKode from '../assets/img/PetaniKode.svg'
import GlobalButton from '../assets/img/GlobalButton.svg'
import More1 from '../assets/img/More1.svg'

const Homepage = () => {
    return (
        <div className="base-container bg-slate-900">
            <div className="hero">

                <div className="base bg-slate-800 text-white py-5 justify-center">
                    <div className="box container mx-auto px-4 py-35 text-center md:text-left">
                        <div className="image relative py-6 md:py-0">
                            <img src={PetaniKode} alt="" className='origin-bottom-right right-0 -bottom-100 static md:absolute lg:w-2/5'/>
                        </div>
                        <div className="text w-100 md:w-2/2">

                            <h1 className="text-5xl font-bold mb-5 tracking-tighter">Petani Kode</h1>
                            <p className="text-xl font-light max-w-1/2 my-7">Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux.</p>
                        </div>
                        <a href="/tutorial/" class="px-3 py-3 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500 mr-4">Mulai
                        Belajar</a>


                        <a href="#newsletter" data-turbo="false" class="px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg active:bg-teal-500">Join
                        Newsletter</a>
                    </div>

                </div>
                <div className="category container mx-auto px-4 lg:max-w-7xl mt-16">
                    <div className="upper">
                        <h1 className='font-bold uppercase text-teal-600 text-lg mb-2'>KATEGORI</h1>
                        <h2 className='text-3xl font-bold mb-2 text-white'>Mau belajar apa hari ini?</h2>
                        <p className='text-lg mb-8 text-slate-500 text-slate-300'>Temukan tutorial berdasarkan minatmu.</p>
                    </div>

                    <div className="cards px-4 mt-15 grid grid-cols-3 gap-3 ">
                        <a href="" className='block rounded-3xl px-6 py-8 bg-slate-800 border-none border-2 '>
                            <img src={Coding} alt="" className='items-center p-2 bg-indigo-500 rounded-md shadow-lg'/>
                            <h1 className="font-bold text-white mt-5 text-base">Basic Programming</h1>
                            <p className='text-slate-500 mt-2 text-sx'>Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.</p>
                        </a>
                        <a href="" className='block rounded-3xl px-6 py-8 bg-slate-800 border-none border-2'>
                            <img src={GlobalButton} alt="" className='items-center p-2 bg-orange-500 rounded-md shadow-lg'/>
                            <h1 className="font-bold text-white mt-5 text-base">Web Programming</h1>
                            <p className='text-slate-500 mt-2 text-sx'>Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codedeigniter, React, dan maasih banyak lagi.</p>
                        </a>
                        <a href="" className='block rounded-3xl px-6 py-8 bg-slate-800 border-none border-2'>
                            <img src={More1} alt="" className='items-center p-2 bg-cyan-500 rounded-md shadow-lg'/>
                            <h1 className="font-bold text-white mt-5 text-base">Tutorial Lainnya</h1>
                            <p className='text-slate-500 mt-2 text-sx'>Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockhain, dan masih banyak lagi.</p>
                        </a>
                    </div>
                </div>
            </div>
                    <div className="update container mx-auto px-4 lg:max-w-7xl mt-16">
                <h1 className='font-bold uppercase text-teal-600 text-sm mb-2'>UPDATE</h1>
                <h2 className='text-3xl font-bold mb-2 text-white'>Apa yang baru di Petani Kode? 🔥 was</h2>
                <p className='text-lg mb-8 text-slate-500'>Baca artikel terbaru yang masih fresh dan hangat.</p>
            </div>
        </div>
    )
}

export default Homepage;