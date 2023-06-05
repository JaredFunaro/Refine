import { useState } from 'react'
import { Link } from 'react-router-dom';
import { blackLogo } from '../assets'
import { styles } from '../styles.js'

const navLinks = [
  {
    id: 'about',
    title: 'About Us'
  },
  {
    id: 'products',
    title: 'Products'
  },
  {
    id: 'gallery',
    title: 'Gallery'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const Navbar = () => {

  const [active, setActive] = useState('');
  // const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 left-0 top-0 z-20 bg-white`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          href={`#about`}
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0,0);
          }}
        >
          <img src={blackLogo} alt='logo' className='h-16'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-20'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? 'text-black'
                : 'text-slate-500'
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}
export default Navbar