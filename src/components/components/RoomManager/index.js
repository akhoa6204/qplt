import styles from '../RoomManager/style.module.css';
import clsx from 'clsx';
import {
  CgArrowLongRight,
  CgFileDocument,
  CgMenu,
  CgUser,
  CgMoreVerticalAlt,
} from 'react-icons/cg';
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
        <div classNam={styles.tableContainer}>
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
            <tr>
              <td className={styles.icon}>
                <CgMenu className={styles.menuIcon} />
              </td>
              <td className={styles.wrong}>
                <div className={styles.imgBox}>
                  <img src="\images\icon\roomManager\room.png" />
                </div>
              </td>
              <td>
                <p>
                  <strong>Phòng 1</strong>
                </p>
                <p>Phan Nguyễn Anh Khoa</p>
                <small>Chưa sử dụng app</small>
              </td>
              <td>
                <p>Tầng trệt</p>
              </td>
              <td>
                <strong>
                  1.500.000 <span>đ</span>
                </strong>
                <br />
                <small className={styles.colorRed}>Chưa thu lần nào</small>
              </td>
              <td>
                <strong>
                  1.500.000 <span>đ</span>
                </strong>
                <br />
                <small className={styles.colorRed}>Chưa thu tiền cọc</small>
              </td>
              <td className={styles.wrong}>
                <strong>
                  0 <span>đ</span>
                </strong>
              </td>
              <td className={clsx(styles.user, styles.wrong)}>
                <div className={styles.icon}>
                  <CgUser />
                </div>
                <p>1/1 người</p>
              </td>
              <td>
                <p>Ngày 1</p>
              </td>
              <td>
                <p>1 tháng </p>
              </td>
              <td>
                <p>6/10/2024 </p>
              </td>
              <td className={styles.wrong}>
                <p>Không xác định</p>
              </td>
              <td className={styles.wrong}>
                <p className={clsx(styles.bgGreenLight, styles.isActive)}>Đang ở</p>
              </td>
              <td className={styles.wrong}>
                <p className={clsx(styles.bgGreenLight, styles.finance)}>Chờ kỳ thu tới</p>
              </td>
              <td className={styles.icon}>
                <CgMoreVerticalAlt />
              </td>
            </tr>
            <tr className={styles.isEmpty}>
              <td className={styles.icon}>
                <CgMenu className={styles.menuIcon} />
              </td>
              <td className={styles.wrong}>
                <div className={styles.imgBox}>
                  <img src="\images\icon\roomManager\room.png" />
                </div>
              </td>
              <td>
                <p>
                  <strong>Phòng 2</strong>
                </p>
              </td>
              <td>
                <p>Tầng trệt</p>
              </td>
              <td>
                <strong>
                  1.500.000 <span>đ</span>
                </strong>
                <br />
                <small className={styles.colorRed}>Chưa thu lần nào</small>
              </td>
              <td>
                <strong>
                  1.500.000 <span>đ</span>
                </strong>
                <br />
                <small className={styles.colorRed}>Chưa thu tiền cọc</small>
              </td>
              <td className={styles.wrong}>
                <strong>
                  0 <span>đ</span>
                </strong>
              </td>
              <td className={clsx(styles.user, styles.wrong)}>
                <div className={styles.icon}>
                  <CgUser />
                </div>
                <p>0/1 người</p>
              </td>
              <td>
                <p>Ngày 1</p>
              </td>
              <td>
                <p>1 tháng </p>
              </td>
              <td className={styles.wrong}>
                <p>Không xác định</p>
              </td>
              <td className={styles.wrong}>
                <p>Không xác định</p>
              </td>
              <td className={styles.wrong}>
                <p className={clsx(styles.bgRedLight, styles.isActive)}>Đang trống</p>
              </td>
              <td className={styles.wrong}>
                <p className={clsx(styles.bgGreenLight, styles.finance)}>Chờ kỳ thu tới</p>
              </td>
              <td className={styles.icon}>
                <CgMoreVerticalAlt />
              </td>
            </tr>
            <tr className={styles.isEmpty}>
              <td className={styles.icon}>
                <CgMenu className={styles.menuIcon} />
              </td>
              <td className={styles.wrong}>
                <div className={styles.imgBox}>
                  <img src="\images\icon\roomManager\room.png" />
                </div>
              </td>
              <td>
                <p>
                  <strong>Phòng 3</strong>
                </p>
              </td>
              <td>
                <p>Tầng trệt</p>
              </td>
              <td>
                <strong>
                  1.500.000 <span>đ</span>
                </strong>
                <br />
                <small className={styles.colorRed}>Chưa thu lần nào</small>
              </td>
              <td>
                <strong>
                  1.500.000 <span>đ</span>
                </strong>
                <br />
                <small className={styles.colorRed}>Chưa thu tiền cọc</small>
              </td>
              <td className={styles.wrong}>
                <strong>
                  0 <span>đ</span>
                </strong>
              </td>
              <td className={clsx(styles.user, styles.wrong)}>
                <div className={styles.icon}>
                  <CgUser />
                </div>
                <p>0/1 người</p>
              </td>
              <td>
                <p>Ngày 1</p>
              </td>
              <td>
                <p>1 tháng </p>
              </td>
              <td className={styles.wrong}>
                <p>Không xác định</p>
              </td>
              <td className={styles.wrong}>
                <p>Không xác định</p>
              </td>
              <td className={styles.wrong}>
                <p className={clsx(styles.bgRedLight, styles.isActive)}>Đang trống</p>
              </td>
              <td className={styles.wrong}>
                <p className={clsx(styles.bgGreenLight, styles.finance)}>Chờ kỳ thu tới</p>
              </td>
              <td className={styles.icon}>
                <CgMoreVerticalAlt />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RoomManager;
