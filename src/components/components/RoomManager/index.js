import styles from '../RoomManager/style.module.css';
import clsx from 'clsx';
import { CgArrowLongRight, CgFileDocument } from 'react-icons/cg';
import { FiPlus, FiChevronDown, FiFilter } from 'react-icons/fi';

function RoomManager() {
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
              <span className={styles.green}>1</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_empty" />
              <label htmlFor="is_empty">Đang trống</label>
              <span className={styles.red}>9</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_terminate_contract" />
              <label htmlFor="is_terminate_contract">Đang báo kết thúc</label>
              <span className={styles.yellow}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_will_terminate_contract" />
              <label htmlFor="is_will_terminate_contract">Sắp hết hạn hợp đồng</label>
              <span className={styles.yellow}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_expire" />
              <label htmlFor="is_expire">Đã quá hạn hợp đồng</label>
              <span className={styles.gray}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="is_deposit_temp" />
              <label htmlFor="is_deposit_temp">Đang cọc giữ chỗ</label>
              <span className={styles.yellow}>0</span>
            </div>
            <div className={styles.selected}>
              <input type="checkbox" id="active_status" />
              <label htmlFor="active_status">Đang nợ tiền</label>
              <span className={styles.red}>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomManager;
