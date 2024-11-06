import styles from './footer.module.css';
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>
          Copyright @ <strong>LOZIDO - Quản lý nhà cho thuê</strong> 2020
        </p>
      </div>
    </div>
  );
}
export default Footer;
