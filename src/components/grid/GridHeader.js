import styles from "./grid.module.css";
const GridHeader = ({ sortHandler }) => {
  return (
    <thead className={styles["table-head"]}>
      <th role="button" onClick={() => sortHandler("firstName")}>
        First name
      </th>
      <th role="button" onClick={() => sortHandler("lastName")}>
        Last name
      </th>
      <th role="button" onClick={() => sortHandler("age")}>
        Age
      </th>
      <th role="button" onClick={() => sortHandler("gender")}>
        Gender
      </th>
      <th role="button" onClick={() => sortHandler("email")}>
        Email
      </th>
      <th role="button" onClick={() => sortHandler("phone")}>
        Phone
      </th>

      <th>Profile image</th>
    </thead>
  );
};

export default GridHeader;
