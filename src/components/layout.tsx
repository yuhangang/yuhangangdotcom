import Link from "next/link";
import React from "react";
import { Color } from "react-bootstrap/esm/types";
import utilStyles from "../../styles/utils.module.css";
import styles from "./layout.module.scss";
import Nav from "./navBar/NavBar";
import ProfileLink from "./profile_link/profile_link";
const name = "Yuhangang";
export const siteTitle = "yuhangang";

export default function Layout({
  children,
  home,
  showNavbar,
  color,
}: {
  children: React.ReactNode;
  home?: boolean;
  showNavbar?: boolean;
  color?: string;
}) {
  return (
    <div className={styles.background}>
      <meta name="theme-color" content={color} />
      <meta name="msapplication-navbutton-color" content={color} />
      <meta name="apple-mobile-web-app-status-bar-style" content={color} />
      {showNavbar !== false ? <Nav></Nav> : null}

      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <></>
          ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>

        <main>{children}</main>
      </div>

      {showNavbar !== false ? (
        <>
          <div className={styles.bottomLink}>
            <ProfileLink></ProfileLink>
          </div>
        </>
      ) : null}
      <div className={styles.bottom}>
        <div className={styles.absoluteBottom}>
          Copyright © {new Date().getFullYear()} Yuhangang. All rights reserved.
        </div>
      </div>
    </div>
  );
}
