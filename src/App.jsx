import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Navbar, Hero, Services, HomeAbout, Snapshots, Reviews, Footer, AboutUs } from './components';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
}

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <div className={`sticky ${ scrollDirection === "down" ? "-top-20" : "top-0"} h-20 z-20 transition-all duration-500 opacity-100`}>
      <Navbar/>
    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>


        <Header/>

        <div className='h-[100vh] bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
          <Hero/>
        </div>

        <Services/>

        <div className='x-screen bg-gray-200'>
        <HomeAbout/>
        </div>

        <div className='h-auto bg-review-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
        <Snapshots/>

          <Reviews/>
        </div>
        <Footer/>

        {/* <Routes>
          <Route path='/' element={<Services/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes> */}

      </div>
  </BrowserRouter>
  )
}

export default App
