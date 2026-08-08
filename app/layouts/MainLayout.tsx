import { Outlet } from 'react-router';
import Navbar from '~/components/shared/navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;