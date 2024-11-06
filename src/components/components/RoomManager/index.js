import styles from '../RoomManager/style.module.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import {
  CgArrowLongRight,
  CgFileDocument,
  CgMenu,
  CgUser,
  CgMoreVerticalAlt,
} from 'react-icons/cg';
import { FiPlus, FiChevronDown, FiFilter } from 'react-icons/fi';

function RoomManager() {
  const [isActiveIndex, setActiveIndex] = useState(false);
  const handleFunc = (index) => {
    if ((isActiveIndex === index) | (index === false)) {
      setActiveIndex(false);
    } else {
      setActiveIndex(index);
    }
  };
  const handleClickOutside = (e) => {
    if (!e.target.closest(`${styles.icon} ${styles.last}`) && !e.target.closest(`${styles.func}`)) {
      setActiveIndex(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const roomList = [
    {
      number: 'Phòng 1',
      cus: 'Phan Nguyễn Anh Khoa',
      usedApp: false,
      floor: 'Tầng trệt',
      price: '1.500.000',
      payRent: false,
      deposit: '1.500.000',
      payRentDeposit: false,
      debt: 0,
      numPeople: 1,
      totalPeople: 1,
      startDate: 1,
      cycleCollect: 1,
      moveInDate: '6/10/2024',
      endDate: null,
      status: true,
      finance: 'Chờ kỳ thu tới',
    },
    {
      number: 'Phòng 2',
      cus: false,
      usedApp: false,
      floor: 'Tầng trệt',
      price: '1.500.000',
      payRent: false,
      deposit: '1.500.000',
      payRentDeposit: false,
      debt: 0,
      numPeople: 0,
      totalPeople: 1,
      startDate: 1,
      cycleCollect: 1,
      moveInDate: null,
      endDate: null,
      status: false,
      finance: 'Chờ kỳ thu tới',
    },
    {
      number: 'Phòng 3',
      cus: false,
      usedApp: false,
      floor: 'Tầng trệt',
      price: '1.500.000',
      payRent: false,
      deposit: '1.500.000',
      payRentDeposit: false,
      debt: 0,
      numPeople: 0,
      totalPeople: 1,
      startDate: 1,
      cycleCollect: 1,
      moveInDate: null,
      endDate: null,
      status: false,
      finance: 'Chờ kỳ thu tới',
    },
    {
      number: 'Phòng 4',
      cus: false,
      usedApp: false,
      floor: 'Tầng trệt',
      price: '1.500.000',
      payRent: false,
      deposit: '1.500.000',
      payRentDeposit: false,
      debt: 0,
      numPeople: 0,
      totalPeople: 1,
      startDate: 1,
      cycleCollect: 1,
      moveInDate: null,
      endDate: null,
      status: false,
      finance: 'Chờ kỳ thu tới',
    },
  ];
  return (
    <div className={styles.roomManagerContainer}>
      <div className={styles.header}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <img src="\images\icon\roomManager\df0af7e0-5496-4c8b-b11d-18779c60e3e0.png" />
          </div>
          <div className={styles.text}>
            <p>Tổng số tiền khách nợ</p>
            <h3>0đ</h3>
          </div>
          <div className={styles.arrowBox}>
            <CgArrowLongRight />
          </div>
        </div>
        <div className={clsx(styles.box, styles.correct)}>
          <div className={styles.icon}>
            <img src="\images\icon\roomManager\97f1bbf4-afa3-4b95-8f04-a78e54d18546.png" />
          </div>
          <div className={styles.text}>
            <p>Tổng số tiền cọc</p>
            <h3>0đ</h3>
          </div>
          <div className={styles.arrowBox}>
            <CgArrowLongRight />
          </div>
        </div>
        <div className={clsx(styles.box, styles.correct)}>
          <div className={styles.icon}>
            <img src="\images\icon\roomManager\e3ebd342-c666-49a0-9783-3f92f21a1809.png" />
          </div>
          <div className={styles.text}>
            <p>Tổng số tiền cọc giữ chỗ phòng</p>
            <h3>0đ</h3>
          </div>
          <div className={styles.arrowBox}>
            <CgArrowLongRight />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <img src="\images\icon\roomManager\cb19f8d1-68b1-438c-b3da-897a6c7829c7 copy.png" />
          </div>
          <div className={styles.text}>
            <p>Sự cố phòng</p>
            <h3>0 vấn đề</h3>
          </div>
          <div className={styles.arrowBox}>
            <CgArrowLongRight />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.desc}>
          <div className={styles.content}>
            <h2>Quản lý danh sách phòng</h2>
            <i>Tất cả danh sách phòng trong Nhà trọ anh khoa</i>
          </div>
          <div className={styles.iconBox}>
            <FiPlus />
          </div>
          <div className={styles.funcBox}>
            <button className={styles.func}>
              <div className={styles.doc}>
                <CgFileDocument />
              </div>
              <p>Ẩn/Hiện cột</p>
              <FiChevronDown />
              <div className={styles.notification}>12</div>
            </button>
            <ul className={styles.dropDown}>
              <li>
                <input type="checkbox" id="group" defaultChecked />
                <label htmlFor="group">Nhóm</label>
              </li>
              <li>
                <input type="checkbox" id="deposit" defaultChecked />
                <label htmlFor="deposit">Mức tiền cọc</label>
              </li>
              <li>
                <input type="checkbox" id="debt" defaultChecked />
                <label htmlFor="debt">Tiền nợ</label>
              </li>
              <li>
                <input type="checkbox" id="customer" defaultChecked />
                <label htmlFor="customer">Khách thuê</label>
              </li>
              <li>
                <input type="checkbox" id="startDate" defaultChecked />
                <label htmlFor="startDate">Ngày lập hóa đơn</label>
              </li>
              <li>
                <input type="checkbox" id="billCycle" defaultChecked />
                <label htmlFor="billCycle">Chu kỳ thu tiền</label>
              </li>
              <li>
                <input type="checkbox" id="startIn" defaultChecked />
                <label htmlFor="startIn">Ngày vào ở</label>
              </li>
              <li>
                <input type="checkbox" id="endDate" defaultChecked />
                <label htmlFor="endDate">Thời hạn hợp đồng</label>
              </li>
            </ul>
            <button className={styles.func}>
              <div className={styles.doc}>
                <CgFileDocument />
              </div>
              <p>Xuất Excel</p>
            </button>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.iconBox}>
            <FiFilter />
            <span>10</span>
          </div>
          <div className={styles.chooseFilter}>
            <div className={styles.selected}>
              <input type="checkbox" id="is_active" />
              <label htmlFor="is_active">Đang ở</label>
              <span className={styles.bgGreen}>1</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_empty" />
              <label htmlFor="is_empty">Đang trống</label>
              <span className={styles.bgRed}>9</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_terminate_contract" />
              <label htmlFor="is_terminate_contract">Đang báo kết thúc</label>
              <span className={styles.bgYellow}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_will_terminate_contract" />
              <label htmlFor="is_will_terminate_contract">Sắp hết hạn hợp đồng</label>
              <span className={styles.bgYellow}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_expire" />
              <label htmlFor="is_expire">Đã quá hạn hợp đồng</label>
              <span className={styles.bgGray}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_deposit_temp" />
              <label htmlFor="is_deposit_temp">Đang cọc giữ chỗ</label>
              <span className={styles.bgYellow}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="active_status" />
              <label htmlFor="active_status">Đang nợ tiền</label>
              <span className={styles.bgRed}>0</span>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tr>
              <th></th>
              <th></th>
              <th>Tên phòng</th>
              <th>Nhóm</th>
              <th>Giá thuê</th>
              <th>Mức giá tiền cọc</th>
              <th>Tiền nợ</th>
              <th>Khách thuê</th>
              <th>Ngày lập hóa đơn</th>
              <th>Chu kỳ thu tiền</th>
              <th>Ngày vào ở</th>
              <th>Thời hạn hợp đồng</th>
              <th>Tình trạng</th>
              <th>Tài chính</th>
              <th></th>
            </tr>
            {roomList.map((room, index) => {
              return (
                <tr key={index} className={room.cus ? '' : styles.isEmpty}>
                  <td className={styles.icon}>
                    <CgMenu className={styles.menuIcon} />
                  </td>
                  <td className={styles.disabled}>
                    <div className={styles.imgBox}>
                      <img src="\images\icon\roomManager\room.png" />
                    </div>
                  </td>
                  <td>
                    <p>
                      <strong>{room.number}</strong>
                    </p>
                    <p>{room.cus ? room.cus : ''}</p>
                    <small>
                      {room.cus ? (room.usedApp ? 'Đã sử dụng app' : 'Chưa sử dụng app') : ''}
                    </small>
                  </td>
                  <td>
                    <p>{room.floor}</p>
                  </td>
                  <td>
                    <strong>
                      {room.price} <span>đ</span>
                    </strong>
                    <br />
                    <small className={styles.colorRed}>
                      {room.payRent ? 'Đã thu' : 'Chưa thu lần nào'}
                    </small>
                  </td>
                  <td>
                    <strong>
                      {room.deposit}
                      <span>đ</span>
                    </strong>
                    <br />
                    <small className={styles.colorRed}>
                      {room.payRentDeposit ? 'Đã thu tiền cọc' : 'Chưa thu tiền cọc'}
                    </small>
                  </td>
                  <td className={styles.disabled}>
                    <strong>
                      {room.debt} <span>đ</span>
                    </strong>
                  </td>
                  <td className={clsx(styles.user, styles.disabled)}>
                    <div className={styles.icon}>
                      <CgUser />
                    </div>
                    <p>
                      {room.numPeople}/{room.totalPeople} người
                    </p>
                  </td>
                  <td>
                    <p>Ngày {room.startDate}</p>
                  </td>
                  <td>
                    <p>{room.cycleCollect} tháng </p>
                  </td>
                  <td>
                    <p>{room.endDate ? room.endDate : 'Không xác định'}</p>
                  </td>
                  <td className={styles.disabled}>
                    <p>{room.moveInDate ? room.moveInDate : 'Không xác định'}</p>
                  </td>
                  <td className={styles.disabled}>
                    <p className={clsx(room.status ? '' : styles.bgRedLight, styles.finance)}>
                      {room.status ? 'Đang ở' : 'Đang trống'}
                    </p>
                  </td>
                  <td className={styles.disabled}>
                    <p className={styles.finance}>{room.finance}</p>
                  </td>
                  <td
                    className={clsx(styles.icon, styles.last)}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFunc(index);
                    }}
                  >
                    <CgMoreVerticalAlt />
                  </td>
                  <div
                    className={clsx(styles.func, {
                      [styles.active]: index === isActiveIndex,
                    })}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={clsx(styles.empty, styles.colorGreen)}>
                      <div className={styles.iconBox}></div>
                      <span>Hợp đồng mới</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Lập hóa đơn</span>
                    </div>
                    <div className={clsx(styles.choice, styles.empty)}>
                      <div className={styles.iconBox}></div>
                      <span>Chi tiết phòng </span>
                    </div>
                    <div className={styles.empty}>
                      <div className={styles.iconBox}></div>
                      <span>Cọc giữ chỗ</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Danh sách khách thuê</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Chuyển phòng</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Báo kết thúc hợp đồng phòng</span>
                    </div>
                    <div className={clsx(styles.choice, styles.empty)}>
                      <div className={styles.iconBox}></div>
                      <span>Cài dặt dịch vụ</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Kết thúc hợp đồng phòng</span>
                    </div>
                    <div className={clsx(styles.choice, styles.empty)}>
                      <div className={styles.iconBox}></div>
                      <span>Thiết lập tài sản</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Xem văn bản hợp đồng</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Quản lý xe</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>In văn bản hợp đồng</span>
                    </div>
                    <div className={clsx(styles.choice, styles.colorGreen)}>
                      <div className={styles.iconBox}></div>
                      <span>Ghi chú</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Chia sẻ văn bản hợp đồng</span>
                    </div>
                    <div className={clsx(styles.choice, styles.empty, styles.colorRed)}>
                      <div className={styles.iconBox}></div>
                      <span>Xóa phòng</span>
                    </div>
                    <div className={styles.choice}>
                      <div className={styles.iconBox}></div>
                      <span>Chia sẻ mã kết nối</span>
                    </div>
                    <div
                      className={clsx(styles.choice, styles.empty)}
                      onClick={() => {
                        handleFunc(false);
                      }}
                    >
                      <div className={styles.iconBox}></div>
                      <span>Đóng menu</span>
                    </div>
                  </div>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default RoomManager;
