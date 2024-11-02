import styles from '../RoomManager/style.module.css';
import clsx from 'clsx';
import { CgArrowLongRight, CgFileDocument } from 'react-icons/cg';
import { FiPlus, FiChevronDown } from 'react-icons/fi';

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
          <div className={styles.func}>
            <div className={styles.doc}>
              <CgFileDocument />
            </div>
            <p>Ẩn/Hiện cột</p>
            <FiChevronDown />
            <div className={styles.notification}>12</div>
          </div>
          <div className={styles.func}>
            <div className={styles.doc}>
              <CgFileDocument />
            </div>
            <p>Xuất Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomManager;
