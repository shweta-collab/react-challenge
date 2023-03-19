import styles from "./grid.module.css";

const GridFooter = ({ footerBody }) => {
  return <div className={styles["table-footer-container"]}>{footerBody}</div>;
};

export default GridFooter;
