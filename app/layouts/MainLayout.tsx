import { Outlet } from 'react-router';
import Footer from '~/components/shared/footer/Footer';
import Navbar from '~/components/shared/navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;