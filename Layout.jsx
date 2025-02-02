import { Outlet } from 'react-router-dom'
import NavBar from './src/components/NavBar'
import Footer from './src/components/Footer'

const Layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };

export default Layout
