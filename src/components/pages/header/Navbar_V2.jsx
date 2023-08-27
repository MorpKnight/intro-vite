import { useState } from "react";

function NavBarV2(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="text-black">
            <div className='max-w-5xl shadow-xl mx-auto px-4 bg-gray-200 p-2 mt-3 rounded-xl'>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4 items-center">
                        {/* logo */}
                        <div>
                            <a href="#" className="flex items-center hover:text-gray-500">
                                <svg className='h-10 w-10 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className='pl-1' href='#'>Giovan Christoffel Sihombing</span>

                            </a>
                        </div>
                        {/* primary nav */}
                        <div>
                            a.k.a MorpKnight
                        </div>
                    </div>
                    {/* secondary nav */}
                    <div className="hidden md:flex items-center">
                        <div className="space-x-5 ">
                            <a href="#" className="hover:text-gray-500">About</a>
                            <a href="#" className="hover:text-gray-500">Projects</a>
                            <a href="#" className="hover:text-gray-500">Tech Review</a>
                            <a href="#" className="hover:text-gray-500">Contact</a>
                        </div>
                    </div>
                    {/* mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className={`w-6 h-6 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path className={`${isOpen? 'hidden' : ''}`} stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                <path className={`${isOpen? '' : "hidden"}`} strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className={isOpen ? `` : `hidden`}>
                <div className='text-right mt-1'>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-100 hover:shadow">About</a>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-100 hover:shadow">Projects</a>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-100 hover:shadow">Tech Review</a>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-100 hover:shadow">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBarV2;