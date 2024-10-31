import {
  CgHomeAlt,
  CgChart,
  CgMathPlus,
  CgUser,
  CgToolbox,
  CgBell,
  CgLogOut,
} from 'react-icons/cg';
import { IoIosSettings } from 'react-icons/io';
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';

function Header() {
  const [isNone, setIsNone] = useState('none');
  const templateRef = useRef();
  const handleClickNotice = (e) => {
    e.stopPropagation();
    setIsNone((prev) => (prev === 'none' ? 'block' : 'none'));
  };
  const handleOutsideClickNotice = (e) => {
    if (templateRef.current && !templateRef.current.contains(e.target)) {
      setIsNone((prev) => (prev === 'none' ? 'block' : 'none'));
    }
  };

  useEffect(() => {
    if (isNone !== 'none') {
      window.addEventListener('click', handleOutsideClickNotice);

      return () => {
        window.removeEventListener('click', handleOutsideClickNotice);
      };
    }
  }, [isNone]);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.menu}>
          <div className={clsx(styles.box, { [styles.active]: true })}>
            <CgHomeAlt className={styles.icon} />
            <a className={styles.text}>Quản lý nhà</a>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <CgChart className={styles.icon} />
            <a className={styles.text}>Tổng báo cáo</a>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <CgMathPlus className={styles.icon} />
            <a className={styles.text}>Đăng tin</a>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <CgUser className={styles.icon} />
            <a className={styles.text}>Môi giới</a>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <CgToolbox className={styles.icon} />
            <a className={styles.text}>Công ty/nhóm</a>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <IoIosSettings className={styles.icon} />
            <a className={styles.text}>Cài đặt chung</a>
          </div>

          <div className={clsx(styles.box)} onClick={handleClickNotice}>
            <CgBell className={styles.icon} />
            <a className={styles.text}>Thông báo</a>
            <p className={styles.totalNotice}>0</p>
            <ul
              className={styles.template}
              style={{ display: isNone }}
              ref={templateRef}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.loading_container}>
                <img src="/images/icon/menu/loading.gif" className={styles.loading} />
                <i style={{ color: 'black', opacity: 0.8 }}>Đang tải thông báo...</i>
              </div>
            </ul>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <CgUser className={styles.icon} />
            <a className={styles.text}>Tài khoản</a>
          </div>

          <div className={clsx(styles.box, { [styles.active]: false })}>
            <CgLogOut className={styles.icon} />
            <a className={styles.text}>Đăng xuất</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
