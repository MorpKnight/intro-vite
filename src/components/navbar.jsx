import Typewriter from  'typewriter-effect';

function NavBar(){
    const sectionEffect = 'text-white hover:text-stone-500';

    return (
        <nav className='p-4 bg-gradient-to-r from-purple-600 via-blue-500 to-red-300 flex justify-between items-center'>
            <div className='text-white text-xl font-bold'>
                <Typewriter
                options={
                    {
                    strings: ['Giovan Christoffel Sihombing'],
                    loop: true,
                    autoStart: true
                    }
                } className='text-white text-xl font-bold'/>
            </div>
            <div className='flex space-x-10'>
                <a href='#' className={sectionClass}>About</a>
                <a href='#' className={sectionClass}>Projects</a>
                <a href='#' className={sectionClass}>Contact</a>
            </div>
        </nav>
    )
}

export default NavBar;