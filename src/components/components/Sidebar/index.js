import clsx from 'clsx';
import styles from './Sidebar.module.css';
import { CgHomeAlt } from 'react-icons/cg';
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';
import ListApartment from '../ListApartment';
import FormAddApartment from '../FormAddApartment';
function Sidebar() {
  const [isNone, setIsNone] = useState('none');
  const [isNone2, setIsNone2] = useState('none');
  const handleOpenCloseListApartment = () => {
    setIsNone((pre) => (pre === 'none' ? 'block' : 'none'));
  };

  const handleCloseOpenFormAddApartment = (e) => {
    setIsNone2((pre) => (pre === 'none' ? 'block' : 'none'));
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home} onClick={handleOpenCloseListApartment}>
          <div className={styles.containerHome}>
            <CgHomeAlt className={styles.iconHome} />
            <p className={styles.notice}>1</p>
          </div>
          <div className={styles.content}>
            <p>Đang quản lý</p>
            <p className={styles.nameApartment}>Nhà trọ Anh Khoa</p>
          </div>
          <FiPlus
            className={styles.iconPlus}
            onClick={(e) => {
              e.stopPropagation();
              handleCloseOpenFormAddApartment();
            }}
          />
        </div>
        <div className={styles.customerServiceContainer}>
          <div className={clsx(styles.box, { [styles.active]: true })}>
            <div className={styles.imgBox}>
              <img src="/images/icon/menu/thu_tien.png"></img>
            </div>
            <a className={styles.text}>Quản lý phòng</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="/images/icon/menu/thu_tien.png"></img>
            </div>
            <a className={styles.text}>Quản lý hóa đơn</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\ghi_chu.png"></img>
            </div>
            <a className={styles.text}>Quản lý dịch vụ</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\ghi_chu.png"></img>
            </div>
            <a className={styles.text}>Quản lý tài sản</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\report_customer_use.png"></img>
            </div>
            <a className={styles.text}>Quản lý hợp đồng</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\danh_sach_lien_he.png"></img>
            </div>
            <a className={styles.text}>Quản lý khách thuê</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\thu_tien.png"></img>
            </div>
            <a className={styles.text}>Thu/Chi - tổng kết</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\setting.png"></img>
            </div>
            <a className={styles.text}>Cài đặt</a>
          </div>
          <div className={clsx(styles.box, { [styles.active]: false })}>
            <div className={styles.imgBox}>
              <img src="\images\icon\menu\icon-zalo.png"></img>
            </div>
            <a className={styles.text}>Nhắn tin</a>
          </div>
        </div>
      </div>
      <ListApartment isNone={isNone} handleOpenCloseListApartment={handleOpenCloseListApartment} />
      <FormAddApartment
        isNone={isNone2}
        handleCloseOpenFormAddApartment={handleCloseOpenFormAddApartment}
      />
    </>
  );
}

export default Sidebar;
