import Sidebar from "./Sidebar";
import styles from  "../../styles/sidebar.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.layout__main__content}>{children}</main>
    </div>
  );
};

export default Layout;
