import styles from "./pagination.module.css";

const Pagination = ({ items, setPageHandler, moveBack, moveFront, page }) => {
  return (
    <div className={styles["pagination-container"]}>
      <button onClick={moveBack}>{`<`}</button>
      {[...Array(100 / items.length)].map((_, i) => {
        return (
          <button
            className={
              page === i + 1 ? styles["page-selected"] : styles["page-no"]
            }
            key={i}
            onClick={() => setPageHandler(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
      <button onClick={moveFront}>{`>`}</button>
    </div>
  );
};

export default Pagination;
