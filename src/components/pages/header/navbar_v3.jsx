import { useState } from "react";
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

function NavBar_v3(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-10 bg-red-400 text-white">
            <div className="flex justify-between items-center mx-3">
                <div className="flex items-center hover:text-gray-200 hover:cursor-default">
                    <CgProfile className="w-6 h-6" />
                    <div className="text-xl px-1 font-bold">
                        MorpKnight
                    </div>
                </div>
                <FaBars className={`w-6 h-6 ${isOpen? 'hidden': ''} sm:hidden`} onClick={() => setIsOpen(!isOpen)}/>
                <ImCross className={`w-4 h-4 ${isOpen? '': 'hidden'} sm:hidden`} onClick={() => setIsOpen(!isOpen)}/>
                <div className='sm:justify-between sm:space-x-5 hidden sm:inline-block'>
                    <a className="hover:text-gray-200 hover:cursor-pointer">Home</a>
                    <a className="hover:text-gray-200 hover:cursor-pointer">About</a>
                    <a className="hover:text-gray-200 hover:cursor-pointer">Projects</a>
                    <a className="hover:text-gray-200 hover:cursor-pointer">Tech Review</a>
                    <a className="hover:text-gray-200 hover:cursor-pointer">Contact</a>
                </div>
            </div>
            <div className='items-center border-black'>
                <ul className={`pt-4 space-y-1 ${isOpen? '' : 'hidden'} w-36 float-right pr-4 text-center`}>
                    <li className='shadow bg-blue-400 rounded-xl'>About</li>
                    <li className="shadow bg-blue-400 rounded-xl">Projects</li>
                    <li className="shadow bg-blue-400 rounded-xl">Tech Review</li>
                    <li className="shadow bg-blue-400 rounded-xl">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar_v3;