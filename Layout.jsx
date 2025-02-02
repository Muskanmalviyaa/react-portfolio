import { Outlet } from 'react-router-dom'
import NavBar from './src/components/NavBar'
import Footer from './src/components/Footer'

const Layout = () => {
    // return (
    //   <div>
    //     <NavBar />
    //     <Outlet />
    //     <Footer />
    //   </div>
    // );
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />  
        
        <main className="flex-grow">{<Outlet />}</main>  
        
        <Footer />  
      </div>
    );
  };

export default Layout
