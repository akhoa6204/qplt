import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import RoomManager from '../../components/RoomManager';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <RoomManager />
      <div className="container">{children}</div>
    </div>
  );
}

export default DefaultLayout;
