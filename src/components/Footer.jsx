import { useState } from 'react'
import { Link } from 'react-router-dom';
import { whiteLogo } from '../assets'
import { styles } from '../styles.js'

const navLinks = [
  {
    id: 'about us',
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

const Footer = () => {

  const [active, setActive] = useState('');
  // const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 left-0 bottom-0 z-20 bg-black`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          href={`#about`}
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0,0);
          }}
        >
          <img src={whiteLogo} alt='logo' className='h-16'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-20'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? 'text-white'
                : 'text-slate-500'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
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
export default Footer