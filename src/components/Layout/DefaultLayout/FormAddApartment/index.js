import styles from '../FormAddApartment/FormAddApartment.module.css';
import { CgHomeAlt, CgAdd, CgClose, CgSoftwareUpload, CgSoftwareDownload } from 'react-icons/cg';
import { AiFillWarning } from 'react-icons/ai';
import { useState } from 'react';
import clsx from 'clsx';

function FormAddApartment({ isNone, handleCloseOpenFormAddApartment }) {
  const [isFade, setIsFade] = useState('DisplayOn 0.5s ease-in-out forwards');
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);
  const [isFocus5, setIsFocus5] = useState(false);
  const [isFocus6, setIsFocus6] = useState(false);
  const [isSelect, setIsSelect] = useState('auto');
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
  const handleFocus6 = () => {
    setIsFocus6((pre) => !pre);
  };
  const notes = {
    auto: (
      <div className={clsx(styles.noteAuto, styles.banner, styles.subBox)}>
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
      <div className={clsx(styles.noteExcel, styles.subBox)}>
        <div className={styles.stepProgressContainer}>
          <ul className={styles.stepProgress}>
            <li className={styles.stepProgressItem}>Bước 1: Tải file mẫu</li>
            <li className={styles.stepProgressItem}>Bước 2: Nhập dữ liệu của bạn vào file mẫu</li>
            <li className={styles.stepProgressItem}>Bước 3: Upload file mẫu lên để nhập liệu</li>
          </ul>
        </div>
        <div className={styles.downUpload}>
          <div className={styles.iconDownUpload}>
            <CgSoftwareUpload />
          </div>
          <input type="file" id="uploadExcel" />
          <label className={styles.focus} htmlFor="uploadExcel">
            File Excel cần nhập dữ liệu
          </label>
        </div>
        <div className={styles.downUpload}>
          <div className={styles.iconDownUpload}>
            <CgSoftwareDownload />
          </div>
          <input type="file" id="downloadExcel" />
          <label className={styles.focus} htmlFor="downloadExcel">
            Tải file Excel mẫu
          </label>
        </div>
      </div>
    ),
    manual: (
      <div className={clsx(styles.noteManual, styles.banner, styles.subBox)}>
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
    <div
      className={styles.formAddApartment}
      style={{ display: isNone, animation: isFade }}
      onClick={handleCloseOpenFormAddApartment}
    >
      <div className={styles.containerList} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={clsx(styles.icon, styles.home)}>
            <CgHomeAlt />
          </div>
          <div className={styles.content}>
            <h2>Thêm nhà trọ</h2>
          </div>
          <div
            className={clsx(styles.icon, styles.close)}
            onClick={handleCloseOpenFormAddApartment}
          >
            <CgClose />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.box}>
            <div className={styles.desc}>
              <p>Thông tin</p>
              <i>Các thông tin nhà trọ cơ bản</i>
            </div>
            <div className={styles.subBox50}>
              <select id="typeApartment">
                <option value="0">Nhà trọ</option>
                <option value="1">Ký túc xá/sleepbox</option>
                <option value="2">Chung cư mini</option>
                <option value="3">Nhà nguyên căn</option>
                <option value="4">Văn phòng cho thuê</option>
                <option value="5">Tòa nhà chung cư</option>
              </select>
              <label className={styles.focus} htmlFor="typeApartment">
                Loại nhà trọ <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
            <div className={styles.subBox50}>
              <input type="text" id="nameApartment" onFocus={handleFocus} onBlur={handleFocus} />
              <label htmlFor="nameApartment" className={isFocus ? styles.focus : ''}>
                Tên nhà trọ <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
          </div>
          <div className={clsx(styles.box, styles.radio)}>
            <div className={styles.desc}>
              <p>Chọn phương thức khởi tạo dữ liệu</p>
              <i>Chọn 1 trong 3 phương thức tạo khởi tạo dữ liệu</i>
            </div>
            <div className={styles.containerRadio}>
              <div className={styles.subBox}>
                <div className={styles.subContent}>
                  <input
                    type="radio"
                    value="1"
                    id="auto"
                    defaultChecked
                    name="chooseRadio"
                    onChange={handleChange}
                  />
                  <label className={styles.focus} htmlFor="auto">
                    Tạo dữ liệu phòng tự động
                  </label>
                </div>
              </div>
              <div className={styles.subBox}>
                <div className={styles.subContent}>
                  <input
                    type="radio"
                    value="2"
                    id="excel"
                    name="chooseRadio"
                    onChange={handleChange}
                  />
                  <label className={styles.focus} htmlFor="excel">
                    Tạo dữ liệu phòng từ Excel
                  </label>
                </div>
              </div>
              <div className={styles.subBox}>
                <div className={styles.subContent}>
                  <input
                    type="radio"
                    value="3"
                    id="manual"
                    name="chooseRadio"
                    onChange={handleChange}
                  />
                  <label className={styles.focus} htmlFor="manual">
                    Tạo dữ liệu phòng thủ công
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>{notes[isSelect]}</div>
          <div className={styles.box} style={{ display: isSelect === 'auto' ? 'grid' : 'none' }}>
            <div className={styles.subBox50}>
              <select id="floor">
                <option value="0">Tầng trệt (không có tầng)</option>
                <option value="1">2 tầng (Gồm 1 trệt + 1 tầng)</option>
                <option value="2">4 tầng (Gồm 1 trệt + 3 tầng)</option>
                <option value="3">5 tầng (Gồm 1 trệt + 4 tầng)</option>
                <option value="4">6 tầng (Gồm 1 trệt + 5 tầng)</option>
                <option value="5">7 tầng (Gồm 1 trệt + 6 tầng)</option>
                <option value="6">8 tầng (Gồm 1 trệt + 7 tầng)</option>
              </select>
              <label className={styles.focus} htmlFor="floor">
                Loại nhà trọ <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
            <div className={styles.subBox50}>
              <input type="text" id="roomNumber" onFocus={handleFocus6} onBlur={handleFocus6} />
              <label className={isFocus6 ? styles.focus : ''} htmlFor="roomNumber">
                Số phòng <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.desc}>
              <p>Địa chỉ:</p>
              <i>Giúp cho khách thuê của bạn có thể tìm thấy nhà trọ của bạn dễ dàng hơn</i>
            </div>

            <div className={styles.subBox50}>
              <select id="city">
                <option value="0">Chọn Tỉnh/Thành phố</option>
              </select>
              <label className={styles.focus} htmlFor="city">
                Chọn Tỉnh/Thành phố <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
            <div className={styles.subBox50}>
              <select id="district">
                <option value="0"></option>
              </select>
              <label className={styles.focus} htmlFor="district">
                Chọn Quận/Huyện <small style={{ color: 'red' }}>*</small>
              </label>
            </div>
            <div className={styles.subBox}>
              <select id="ward">
                <option value="0"></option>
              </select>
              <label className={styles.focus} htmlFor="ward">
                Chọn Phường/Xã <small style={{ color: 'red' }}> *</small>
              </label>
            </div>
            <div className={styles.subBox}>
              <input type="text" id="numberHouse" onFocus={handleFocus2} onBlur={handleFocus2} />
              <label htmlFor="numberHouse" className={isFocus2 ? styles.focus : ''}>
                Địa chỉ chi tiết. Ví dụ: 61-Ỷ Lan Nguyên Phi
                <small style={{ color: 'red' }}> *</small>
              </label>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.desc}>
              <p>Thông tin cơ bản:</p>
              <i>Thông tin diện tích, giá thuê, số lượng thành viên</i>
            </div>

            <div className={styles.subBox50}>
              <input type="text" defaultValue="15" id="acreage" />
              <label className={styles.focus} htmlFor="acreage">
                Diện tích (m2)
                <small style={{ color: 'red' }}> *</small>
              </label>
            </div>
            <div className={styles.subBox50}>
              <input type="text" id="priceAvg" onFocus={handleFocus3} onBlur={handleFocus3} />
              <label htmlFor="priceAvg" className={isFocus3 ? styles.focus : ''}>
                Giá thuê trung bình (đ)
                <small style={{ color: 'red' }}> *</small>
              </label>
            </div>
            <div className={styles.subBox}>
              <select id="quantity">
                <option value="0">1 người ở</option>
                <option value="1">2 người ở</option>
                <option value="2">3 người ở</option>
                <option value="3">4 người ở</option>
                <option value="4">5-6 người ở</option>
                <option value="5">7-10 người ở</option>
                <option value="6">Không giới hạn</option>
              </select>
              <label className={styles.focus} htmlFor="quantity">
                Tối đa người ở / phòng
              </label>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.desc}>
              <p>Cài đặt dịch vụ:</p>
              <i>Thiết lập các dịch vụ khi khách thuê sử dụng khi thuê</i>
            </div>

            <div className={styles.subBox50}>
              <select id="electric">
                <option value="0">Miễn phí/Không sử dụng</option>
                <option value="1">Tính theo người</option>
                <option value="2">Tính theo tháng</option>
                <option value="3" selected>
                  Tính theo đồng hồ (phổ biến)
                </option>
              </select>
              <label className={styles.focus} htmlFor="electric">
                Dịch vụ điện
              </label>
            </div>
            <div className={styles.subBox50}>
              <select id="water">
                <option value="0">Miễn phí/Không sử dụng</option>
                <option value="1">Tính theo người</option>
                <option value="2">Tính theo tháng</option>
                <option value="3" selected>
                  Tính theo đồng hồ (phổ biến)
                </option>
              </select>
              <label className={styles.focus} htmlFor="water">
                Dịch vụ nước
              </label>
            </div>
            <div className={styles.subBox50}>
              <select id="trash">
                <option value="0">Miễn phí/Không sử dụng</option>
                <option value="1">Tính theo người</option>
                <option value="2">Tính theo tháng</option>
              </select>
              <label className={styles.focus} htmlFor="trash">
                Dịch vụ rác
              </label>
            </div>
            <div className={styles.subBox50}>
              <select id="wifi">
                <option value="0">Miễn phí/Không sử dụng</option>
                <option value="1">Tính theo người</option>
                <option value="2">Tính theo tháng</option>
              </select>
              <label className={styles.focus} htmlFor="wifi">
                Dịch vụ wifi/internet
              </label>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.desc}>
              <p>Cài đặt tính năng:</p>
              <i>Thiết lập các tính năng cho nhà trọ</i>
            </div>

            <div className={clsx(styles.subBox50, styles.checkBox)}>
              <input type="checkbox" id="asset" defaultChecked />
              <label className={styles.focus} htmlFor="asset">
                <h3>Quản lý tài sản</h3>
                <p>Quản lý tài sản khách thuê sử dụng</p>
              </label>
            </div>
            <div className={clsx(styles.subBox50, styles.checkBox)}>
              <input type="checkbox" id="car" defaultChecked />
              <label className={styles.focus} htmlFor="car">
                <h3>Quản lý xe</h3>
                <p>Các thông tin xe của khách thuê</p>
              </label>
            </div>
            <div className={clsx(styles.subBox50, styles.checkBox)}>
              <input type="checkbox" id="broker" defaultChecked />
              <label className={styles.focus} htmlFor="broker">
                <h3>Quản lý môi giới</h3>
                <p>Các thông tin về mô giới</p>
              </label>
            </div>
            <div className={clsx(styles.subBox50, styles.checkBox)}>
              <input type="checkbox" id="post" defaultChecked />
              <label className={styles.focus} htmlFor="post">
                <h3>Quản lý tin đăng</h3>
                <p>Các thông tin về tin đăng</p>
              </label>
            </div>
            <div className={clsx(styles.subBox50, styles.checkBox)}>
              <input type="checkbox" id="message" defaultChecked />
              <label className={styles.focus} htmlFor="message">
                <h3>Gửi tin nhắn tự động cho khách thuê</h3>
                <p>Giửi tin nhắn SMS tự động cho khách thuê sau khi lập phiếu</p>
              </label>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.desc}>
              <p>Cài đặt cho phiếu thu (hóa đơn):</p>
              <i>Thiết lập cho hóa đơn khi bạn lập hóa đơn tiền thuê cho khách thuê</i>
            </div>

            <div className={styles.subBox50}>
              <div className={styles.inputForm}>
                <input type="text" id="start" onFocus={handleFocus4} onBlur={handleFocus4} />
                <label for="start" className={isFocus4 ? styles.focus : ''}>
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
            <div className={styles.subBox50}>
              <div className={styles.inputForm}>
                <input type="text" id="enddate" onFocus={handleFocus5} onBlur={handleFocus5} />
                <label htmlFor="enddate" className={isFocus5 ? styles.focus : ''}>
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
                  <strong>Ví dụ:</strong> Bạn lập phiếu ngày 01 và hạn đóng tiền thuê trọ ở đây là 5
                  ngày thì ngày 05 sẽ là ngày hết hạn
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.close} onClick={handleCloseOpenFormAddApartment}>
            Đóng
          </div>
          <div className={styles.add}>Thêm nhà trọ</div>
        </div>
      </div>
    </div>
  );
}
export default FormAddApartment;
