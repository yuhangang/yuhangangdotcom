import { FC, PropsWithChildren } from "react";
import styles from "./responsive.module.scss";

export default function ResponsiveComponent(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className={styles.responsivecomponent}>{props.children}</div>;
}
