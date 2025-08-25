// import { Outlet } from 'react-router-dom'
// import NavBar from './src/components/NavBar'
// import Footer from './src/components/Footer'

// function Layout() {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <NavBar />  
//         <main className="flex-grow p-4 m-auto w-full max-w-7xl">
//                 <Outlet />
//          </main>
        
//         <Footer />  
//       </div>
//     );
//   };

// export default Layout
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import NavBar from './src/components/NavBar';
import Footer from './src/components/Footer';

function Layout() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-4 m-auto w-full max-w-7xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;