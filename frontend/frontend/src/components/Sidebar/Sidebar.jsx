"use client";

import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SideBarContext";
import { useRouter } from "next/navigation";
import styles from "../../styles/sidebar.module.css";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
];

const Sidebar = () => {
  const router = useRouter();

  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className={styles.sidebar__wrapper}>
      <button className={styles.btn} onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      {/* <aside className={styles.sidebar} data-collapse={isCollapsed}> */}
      <aside
        className={`${styles.sidebar} ${styles.sidebarContainer}`}
        data-collapse={isCollapsed}
      >
        <div className={styles.sidebar__top}>
          <Image
            width={80}
            height={80}
            className={styles.sidebar__logo}
            src="/logo.jpg"
            alt="logo"
          />
          <p className={styles.sidebar__logo__name}>Fundraiser</p>
        </div>
        <ul className={styles.sidebar__list}>
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className={styles.sidebar__item} key={name}>
                {/* <Link
                  className={styles.sidebar__link}
                  href={href}
                >
                  <span className={styles.sidebar__icon}>
                    <Icon />
                  </span>
                  <span className={styles.sidebar__name}>{name}</span>
                </Link> */}
                <Link
                  className={`${styles.sidebar__link} ${
                    window.location.pathname === href ? styles.sidebar__link__active : ""
                  }`}
                  href={href}
                >
                  <span className={styles.sidebar__icon}>
                    <Icon />
                  </span>
                  <span className={styles.sidebar__name}>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
