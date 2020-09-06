import styles from './responsive.module.scss';

export default function ResponsiveComponent(children:Array<JSX.Element> | JSX.Element):JSX.Element{

    return (
    <div className={styles.responsivecomponent}>{children}</div>
    );
}