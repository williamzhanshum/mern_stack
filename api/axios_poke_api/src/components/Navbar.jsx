import react from 'react';

const Navbar = () => {
  return (
    <header className='flex justify-between bg-midnight text-white py-4 px-8'>
      <a href='/' className='text-lg font-bold'>
        Pokemon
      </a>
      <ul className='hidden md:flex flex-row items-center align-middle gap-4'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>

      <button className='md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
