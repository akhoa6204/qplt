import clsx from 'clsx';
import styles from './Sidebar.module.css';
import { CgHomeAlt, CgAdd } from 'react-icons/cg';
import { useState } from 'react';
import ListApartment from '../ListApartment';
import FormAddApartment from '../FormAddApartment';
function Sidebar() {
  const [isNone, setIsNone] = useState('none');
  const [isNone2, setIsNone2] = useState('none');
  const handleOpenCloseListApartment = () => {
    setIsNone((pre) => (pre === 'none' ? 'block' : 'none'));
  };
  //   setIsFocus((pre) => !pre);
  // };
  // const handleFocus2 = () => {
  //   setIsFocus2((pre) => !pre);
  // };
  // const handleFocus3 = () => {
  //   setIsFocus3((pre) => !pre);
  // };
  // const handleFocus4 = () => {
  //   setIsFocus4((pre) => !pre);
  // };
  // const handleFocus5 = () => {
  //   setIsFocus5((pre) => !pre);
  // };
  // const notes = {
  //   auto: (
  //     <div className={clsx(styles.noteAuto, styles.banner)}>
  //       <div className={styles.iconWarn}>
  //         <AiFillWarning />
  //       </div>
  //       <p>
  //         <strong>Ghi chú:</strong> Vui lòng chọn số tầng và nhập số phòng để hệ thống tự động tạo
  //         dữ liệu phòng cho bạn
  //       </p>
  //     </div>
  //   ),
  //   excel: (
  //     <div className={styles.noteExcel}>
  //       <div className={styles.stepProgressContainer}>
  //         <ul className={styles.stepProgress}>
  //           <li className={styles.stepProgressItem}>Bước 1: Tải file mẫu</li>
  //           <li className={styles.stepProgressItem}>Bước 2: Nhập dữ liệu của bạn vào file mẫu</li>
  //           <li className={styles.stepProgressItem}>Bước 3: Upload file mẫu lên để nhập liệu</li>
  //         </ul>
  //       </div>
  //       <div className={styles.uploadExcel}>
  //         <div className={styles.iconDownUpload}>
  //           <CgSoftwareUpload />
  //         </div>
  //         <input type="file" id="uploadExcel" />
  //         <label htmlFor="uploadExcel">File Excel cần nhập dữ liệu</label>
  //       </div>
  //       <div className={styles.downloadExcel}>
  //         <div className={styles.iconDownUpload}>
  //           <CgSoftwareDownload />
  //         </div>
  //         <input type="file" id="downloadExcel" />
  //         <label htmlFor="downloadExcel">Tải file Excel mẫu</label>
  //       </div>
  //     </div>
  //   ),
  //   manual: (
  //     <div className={clsx(styles.noteManual, styles.banner)}>
  //       <div className={styles.iconWarn}>
  //         <AiFillWarning />
  //       </div>
  //       <p>
  //         <strong>Ghi chú:</strong> Bạn phải thực hiện tạo dữ liệu cho từng phòng bằng thủ công.
  //       </p>
  //     </div>
  //   ),
  // };
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   if (value === '1') {
  //     setIsSelect('auto');
  //   } else if (value === '2') {
  //     setIsSelect('excel');
  //   } else if (value === '3') {
  //     setIsSelect('manual');
  //   }
  // };
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
            <p style={{ color: '#0e844a' }}>Nhà trọ Anh Khoa</p>
          </div>
          <CgAdd
            className={styles.iconPlus}
            onClick={(e) => {
              e.stopPropagation();
              handleCloseOpenFormAddApartment();
            }}
          />
        </div>
        <div className={styles.dichvuContainer}>
          <div className={styles.dichvu}>
            <div className={clsx(styles.dichvuBox, { [styles.active]: true })}>
              <div>
                <img src="/images/icon/menu/thu_tien.png"></img>
              </div>
              <a className={styles.text}>Quản lý phòng</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="/images/icon/menu/thu_tien.png"></img>
              </div>
              <a className={styles.text}>Quản lý hóa đơn</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\ghi_chu.png"></img>
              </div>
              <a className={styles.text}>Quản lý dịch vụ</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\ghi_chu.png"></img>
              </div>
              <a className={styles.text}>Quản lý tài sản</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\report_customer_use.png"></img>
              </div>
              <a className={styles.text}>Quản lý hợp đồng</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\danh_sach_lien_he.png"></img>
              </div>
              <a className={styles.text}>Quản lý khách thuê</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\thu_tien.png"></img>
              </div>
              <a className={styles.text}>Thu/Chi - tổng kết</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\setting.png"></img>
              </div>
              <a className={styles.text}>Cài đặt</a>
            </div>
            <div className={styles.dichvuBox}>
              <div>
                <img src="\images\icon\menu\icon-zalo.png"></img>
              </div>
              <a className={styles.text}>Nhắn tin</a>
            </div>
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
