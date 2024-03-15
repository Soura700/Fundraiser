import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "@/styles/sidebar.module.css";
import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Sidebar />
        <Navbar />
        <main className={styles.layout__main__content}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
