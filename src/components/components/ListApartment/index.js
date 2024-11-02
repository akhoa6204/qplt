import styles from './ListApartment.module.css';
import clsx from 'clsx';
import { CgHomeAlt, CgClose } from 'react-icons/cg';
import { BsFillTrash3Fill, BsArrowRight } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
function ListApartment({ isNone, handleOpenCloseListApartment }) {
  return (
    <div
      className={styles.ListApartment}
      onClick={handleOpenCloseListApartment}
      style={{ display: isNone }}
    >
      <div
        className={styles.containerList}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <div className={clsx(styles.icon, styles.home)}>
            <CgHomeAlt />
          </div>
          <div className={styles.content}>
            <h2>Danh sách nhà trọ của bạn</h2>
            <i>Tới 1 nhà trọ và quản lý</i>
          </div>
          <div className={clsx(styles.icon, styles.close)} onClick={handleOpenCloseListApartment}>
            <CgClose />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.apartment}>
            <div className={styles.nameAdress}>
              <h3>Nhà trọ Anh Khoa</h3>
              <i>61 Ỷ Lan Nguyên Phi , Hòa Cường Bắc, Hải Châu, Thành phố Đà Nẵng</i>
            </div>
            <div className={styles.func}>
              <div className={clsx(styles.icon, styles.bin, { [styles.active]: false })}>
                <BsFillTrash3Fill />
              </div>
              <div className={clsx(styles.icon, styles.edit, { [styles.active]: true })}>
                <FaEdit />
              </div>
              <div className={clsx(styles.icon, styles.arrow, { [styles.active]: true })}>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListApartment;
