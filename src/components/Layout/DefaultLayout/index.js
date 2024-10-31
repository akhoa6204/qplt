import Header from '../../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
