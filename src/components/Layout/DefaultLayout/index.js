import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import RoomManager from '../../components/RoomManager';
import Footer from '../../components/Footer';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <RoomManager />
      <Footer />
      <div className="container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
