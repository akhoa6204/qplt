import clsx from 'clsx';
import styles from './Sidebar.module.css';
import { CgHomeAlt, CgAdd, CgClose, CgSoftwareUpload, CgSoftwareDownload } from 'react-icons/cg';
import { BsFillTrash3Fill, BsArrowRight } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';

function Sidebar() {
  const [isNone, setIsNone] = useState('none');
  // const [isVisible, setIsVisible] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);
  const [isFocus5, setIsFocus5] = useState(false);
  const [isSelect, setIsSelect] = useState('auto');
  const handleCloseOpenList = () => {
    setIsNone((pre) => (pre === 'none' ? 'flex' : 'none'));
  };
  const handleFocus = () => {
    setIsFocus((pre) => !pre);
  };
  const handleFocus2 = () => {
    setIsFocus2((pre) => !pre);
  };
  const handleFocus3 = () => {
    setIsFocus3((pre) => !pre);
  };
  const handleFocus4 = () => {
    setIsFocus4((pre) => !pre);
  };
  const handleFocus5 = () => {
    setIsFocus5((pre) => !pre);
  };
  const notes = {
    auto: (
      <div className={clsx(styles.noteAuto, styles.banner)}>
        <div className={styles.iconWarn}>
          <AiFillWarning />
        </div>
        <p>
          <strong>Ghi chú:</strong> Vui lòng chọn số tầng và nhập số phòng để hệ thống tự động tạo
          dữ liệu phòng cho bạn
        </p>
      </div>
    ),
    excel: (
      <div className={styles.noteExcel}>
        <div className={styles.stepProgressContainer}>
          <ul className={styles.stepProgress}>
            <li className={styles.stepProgressItem}>Bước 1: Tải file mẫu</li>
            <li className={styles.stepProgressItem}>Bước 2: Nhập dữ liệu của bạn vào file mẫu</li>
            <li className={styles.stepProgressItem}>Bước 3: Upload file mẫu lên để nhập liệu</li>
          </ul>
        </div>
        <div className={styles.uploadExcel}>
          <div className={styles.iconDownUpload}>
            <CgSoftwareUpload />
          </div>
          <input type="file" id="uploadExcel" />
          <label htmlFor="uploadExcel">File Excel cần nhập dữ liệu</label>
        </div>
        <div className={styles.downloadExcel}>
          <div className={styles.iconDownUpload}>
            <CgSoftwareDownload />
          </div>
          <input type="file" id="downloadExcel" />
          <label htmlFor="downloadExcel">Tải file Excel mẫu</label>
        </div>
      </div>
    ),
    manual: (
      <div className={clsx(styles.noteManual, styles.banner)}>
        <div className={styles.iconWarn}>
          <AiFillWarning />
        </div>
        <p>
          <strong>Ghi chú:</strong> Bạn phải thực hiện tạo dữ liệu cho từng phòng bằng thủ công.
        </p>
      </div>
    ),
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '1') {
      setIsSelect('auto');
    } else if (value === '2') {
      setIsSelect('excel');
    } else if (value === '3') {
      setIsSelect('manual');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.home} onClick={handleCloseOpenList}>
          <div className={styles.containerHome}>
            <CgHomeAlt className={styles.iconHome} />
            <p className={styles.notice}>1</p>
          </div>
          <div className={styles.content}>
            <p>Đang quản lý</p>
            <p style={{ color: '#0e844a' }}>Nhà trọ Anh Khoa</p>
          </div>
          <CgAdd className={styles.iconPlus} />
        </div>
        <div className={styles.dichvu}></div>
      </div>
      <div className={styles.danhSach} style={{ display: isNone }} onClick={handleCloseOpenList}>
        <div
          className={styles.containerList}
          onClick={(e) => {
            e.stopPropagation();
          }}
          // style={{
          //   animation: isVisible
          //     ? 'DisplayOn 0.3s ease-in-out forwards'
          //     : ' DisplayOff 0.3s ease-in-out forwards',
          // }}
        >
          <div className={styles.headerList}>
            <div className={styles.headerIcon}>
              <CgHomeAlt />
            </div>
            <div className={styles.content}>
              <h2>Danh sách nhà trọ của bạn</h2>
              <i>Tới 1 nhà trọ và quản lý</i>
            </div>
            <div
              className={clsx(styles.headerIcon, styles.closeIcon)}
              onClick={handleCloseOpenList}
            >
              <CgClose />
            </div>
          </div>
          <div className={styles.contentList}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h4 style={{ marginBottom: '8px' }}>Nhà trọ Anh Khoa</h4>
                <p style={{ marginBottom: '16px' }}>
                  61 Ỷ Lan Nguyên Phi , Hòa Cường Bắc, Hải Châu, Thành phố Đà Nẵng
                </p>
              </div>
              <div className={styles.containerIcon}>
                <div className={clsx(styles.contentIcon, { [styles.active]: false })}>
                  <BsFillTrash3Fill />
                </div>
                <div className={clsx(styles.contentIcon, { [styles.active]: true })}>
                  <FaEdit />
                </div>
                <div className={clsx(styles.contentIcon, { [styles.active]: true })}>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.addNhatroContainer}>
        <div className={styles.containerList}>
          <div className={styles.headerList}>
            <div className={clsx(styles.headerIcon, styles.homeIcon)}>
              <CgHomeAlt />
            </div>
            <div className={styles.content}>
              <h2>Thêm nhà trọ</h2>
            </div>
            <div
              className={clsx(styles.headerIcon, styles.closeIcon)}
              onClick={handleCloseOpenList}
            >
              <CgClose />
            </div>
          </div>
          <div className={styles.contentList}>
            <div className={styles.info}>
              <p>Thông tin</p>
              <i>Các thông tin nhà trọ cơ bản</i>
            </div>
            <div className={styles.typeNhaTroInput}>
              <select id={styles.typeNhaTro} name="typeNhaTro">
                <option value="0">Nhà trọ</option>
                <option value="1">Ký túc xá/sleepbox</option>
                <option value="2">Chung cư mini</option>
                <option value="3">Nhà nguyên căn</option>
                <option value="4">Văn phòng cho thuê</option>
                <option value="5">Tòa nhà chung cư</option>
              </select>
              <label htmlFor={styles.typeNhaTro}>
                Loại nhà trọ <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
            <div className={styles.nameNhaTroInput}>
              <input
                type="text"
                id={styles.nameNhaTro}
                onFocus={handleFocus}
                onBlur={handleFocus}
              />
              <label htmlFor={styles.nameNhaTro} className={isFocus ? styles.focus : ''}>
                Tên nhà trọ <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
            <div className={styles.chooseMethodAdd}>
              <p>Chọn phương thức khởi tạo dữ liệu</p>
              <i>Chọn 1 trong 3 phương thức tạo khởi tạo dữ liệu</i>
            </div>
            <div className={styles.chooseRadio}>
              <form>
                <div className={styles.inputRadio}>
                  <input
                    type="radio"
                    value="1"
                    id="auto"
                    defaultChecked
                    name="chooseRadio"
                    onChange={handleChange}
                  />
                  <label htmlFor="auto">Tạo dữ liệu phòng tự động</label>
                </div>
                <div className={styles.inputRadio}>
                  <input
                    type="radio"
                    value="2"
                    id="excel"
                    name="chooseRadio"
                    onChange={handleChange}
                  />
                  <label htmlFor="excel">Tạo dữ liệu phòng từ Excel</label>
                </div>
                <div className={styles.inputRadio}>
                  <input
                    type="radio"
                    value="3"
                    id="manual"
                    name="chooseRadio"
                    onChange={handleChange}
                  />
                  <label htmlFor="manual">Tạo dữ liệu phòng thủ công</label>
                </div>
              </form>
            </div>
            <div className={styles.ghiChuContainer}>{notes[isSelect]}</div>
            <div className={styles.chooseMethodAdd}>
              <p>Địa chỉ:</p>
              <i>Giúp cho khách thuê của bạn có thể tìm thấy nhà trọ của bạn dễ dàng hơn</i>
            </div>
            <div className={styles.addressContainer}>
              <div className={styles.input1}>
                <select id="city">
                  <option value="0">Chọn Tỉnh/Thành phố</option>
                </select>
                <label htmlFor="city">
                  Chọn Tỉnh/Thành phố <small style={{ color: 'red' }}>*</small>
                </label>
              </div>
              <div className={styles.input2}>
                <select id="quan">
                  <option value="0"></option>
                </select>
                <label htmlFor="quan">
                  Chọn Quận/Huyện <small style={{ color: 'red' }}>*</small>
                </label>
              </div>
              <div className={styles.input3}>
                <select id="phuong">
                  <option value="0"></option>
                </select>
                <label htmlFor="phuong">
                  Chọn Phường/Xã <small style={{ color: 'red' }}> *</small>
                </label>
              </div>
              <div className={styles.input4}>
                <input type="text" id="dcct" onFocus={handleFocus2} onBlur={handleFocus2} />
                <label htmlFor="dcct" className={isFocus2 ? styles.focus : ''}>
                  Địa chỉ chi tiết. Ví dụ: 61-Ỷ Lan Nguyên Phi
                  <small style={{ color: 'red' }}> *</small>
                </label>
              </div>
            </div>
            <div className={styles.chooseMethodAdd}>
              <p>Thông tin cơ bản:</p>
              <i>Thông tin diện tích, giá thuê, số lượng thành viên</i>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.input1}>
                <input type="text" defaultValue="15" id="dientich" />
                <label htmlFor="dientich">
                  Diện tích (m2)
                  <small style={{ color: 'red' }}> *</small>
                </label>
              </div>
              <div className={styles.input2}>
                <input type="text" id="price" onFocus={handleFocus3} onBlur={handleFocus3} />
                <label htmlFor="price" className={isFocus3 ? styles.focus : ''}>
                  Giá thuê trung bình (đ)
                  <small style={{ color: 'red' }}> *</small>
                </label>
              </div>
              <div className={styles.input3}>
                <select id="quantity">
                  <option value="0">1 người ở</option>
                  <option value="1">2 người ở</option>
                  <option value="2">3 người ở</option>
                  <option value="3">4 người ở</option>
                  <option value="4">5-6 người ở</option>
                  <option value="5">7-10 người ở</option>
                  <option value="6">Không giới hạn</option>
                </select>
                <label htmlFor="quantity">Tối đa người ở / phòng</label>
              </div>
            </div>
            <div className={styles.chooseMethodAdd}>
              <p>Cài đặt dịch vụ:</p>
              <i>Thiết lập các dịch vụ khi khách thuê sử dụng khi thuê</i>
            </div>
            <div className={styles.dichvuContainer}>
              <div className={styles.input1}>
                <select id="dien">
                  <option value="0">Miễn phí/Không sử dụng</option>
                  <option value="1">Tính theo người</option>
                  <option value="2">Tính theo tháng</option>
                  <option value="3" selected>
                    Tính theo đồng hồ (phổ biến)
                  </option>
                </select>
                <label htmlFor="dien">Dịch vụ điện</label>
              </div>
              <div className={styles.input2}>
                <select id="nuoc">
                  <option value="0">Miễn phí/Không sử dụng</option>
                  <option value="1">Tính theo người</option>
                  <option value="2">Tính theo tháng</option>
                  <option value="3" selected>
                    Tính theo đồng hồ (phổ biến)
                  </option>
                </select>
                <label htmlFor="nuoc">Dịch vụ nước</label>
              </div>
              <div className={styles.input3}>
                <select id="rac">
                  <option value="0">Miễn phí/Không sử dụng</option>
                  <option value="1">Tính theo người</option>
                  <option value="2">Tính theo tháng</option>
                </select>
                <label htmlFor="rac">Dịch vụ rác</label>
              </div>
              <div className={styles.input4}>
                <select id="wifi">
                  <option value="0">Miễn phí/Không sử dụng</option>
                  <option value="1">Tính theo người</option>
                  <option value="2">Tính theo tháng</option>
                </select>
                <label htmlFor="wifi">Dịch vụ wifi/internet</label>
              </div>
            </div>
            <div className={styles.chooseMethodAdd}>
              <p>Cài đặt tính năng:</p>
              <i>Thiết lập các tính năng cho nhà trọ</i>
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.checkBox1}>
                <input type="checkbox" id="taisan" defaultChecked />
                <label htmlFor="taisan">
                  <h3>Quản lý tài sản</h3>
                  <p>Quản lý tài sản khách thuê sử dụng</p>
                </label>
              </div>
              <div className={styles.checkBox2}>
                <input type="checkbox" id="xe" defaultChecked />
                <label htmlFor="xe">
                  <h3>Quản lý xe</h3>
                  <p>Các thông tin xe của khách thuê</p>
                </label>
              </div>
              <div className={styles.checkBox3}>
                <input type="checkbox" id="moigioi" defaultChecked />
                <label htmlFor="moigioi">
                  <h3>Quản lý môi giới</h3>
                  <p>Các thông tin về mô giới</p>
                </label>
              </div>
              <div className={styles.checkBox4}>
                <input type="checkbox" id="post" defaultChecked />
                <label htmlFor="post">
                  <h3>Quản lý tin đăng</h3>
                  <p>Các thông tin về tin đăng</p>
                </label>
              </div>
              <div className={styles.checkBox5}>
                <input type="checkbox" id="message" checked />
                <label htmlFor="message">
                  <h3>Gửi tin nhắn tự động cho khách thuê</h3>
                  <p>Giửi tin nhắn SMS tự động cho khách thuê sau khi lập phiếu</p>
                </label>
              </div>
            </div>
            <div className={styles.chooseMethodAdd}>
              <p>Cài đặt cho phiếu thu (hóa đơn):</p>
              <i>Thiết lập cho hóa đơn khi bạn lập hóa đơn tiền thuê cho khách thuê</i>
            </div>
            <div className={styles.phieuThuContainer}>
              <div className={styles.input1}>
                <div className={styles.inputForm}>
                  <input type="text" id="ngaylap" onFocus={handleFocus4} onBlur={handleFocus4} />
                  <label for="ngaylap" className={isFocus4 ? styles.focus : ''}>
                    Ngày lập hóa đơn và trong khoảng 1 đến 31{' '}
                    <small style={{ color: 'red' }}> *</small>
                  </label>
                </div>
                <div className={styles.warnBox}>
                  <div className={styles.warnIcon}>
                    <AiFillWarning />
                  </div>
                  <p>
                    <strong>Thông tin:</strong> Khi đến ngày lập hóa đơn hệ thống sẽ nhắc nhở qua
                    thông báo
                  </p>
                </div>
                <div className={styles.example}>
                  <p>- Là ngày lập hóa đơn tiền điện, nước...</p>
                  <p>- Nhập một ngày trong tháng. Nếu không nhập mặc định là cuối tháng.</p>
                </div>
              </div>
              <div className={styles.input2}>
                <div className={styles.inputForm}>
                  <input type="text" id="handong" onFocus={handleFocus5} onBlur={handleFocus5} />
                  <label for="handong" className={isFocus5 ? styles.focus : ''}>
                    Hạn đóng tiền
                    <small style={{ color: 'red' }}> *</small>
                  </label>
                </div>
                <div className={styles.warnBox}>
                  <div className={styles.warnIcon}>
                    <AiFillWarning />
                  </div>
                  <p>
                    <strong>Thông tin:</strong> Khi khách đóng tiền không đúng thời hạn hệ thống sẽ
                    nhắc nhở
                  </p>
                </div>
                <div className={styles.example}>
                  <p>
                    <strong>Ví dụ:</strong> Bạn lập phiếu ngày 01 và hạn đóng tiền thuê trọ ở đây là
                    5 ngày thì ngày 05 sẽ là ngày hết hạn
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerList}>
            <div className={styles.close}>Đóng</div>
            <div className={styles.add}>
              <div className={styles.addIcon}>
                <CgAdd />
              </div>
              <p>Thêm nhà trọ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
