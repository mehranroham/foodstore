import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Container from '../components/Container';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='font-Dana-Medium bg-init-3 text-stone-100 w-full min-h-[calc(100vh_-_126px)]'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
