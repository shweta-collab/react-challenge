import { useEffect, useState } from "react";
import { fetchUsers } from "../../utils";
import styles from "./grid.module.css";
import { useStateWithCallback } from "../../hooks/useStateWithCallback";
import { useSortableData } from "../../hooks/useSortableData";
import GridHeader from "./GridHeader";
import GridBody from "./GridBody";
import GridFooter from "./GridFooter";
import Pagination from "../pagination/Pagination";
const Grid = ({ setIsOpen }) => {
  const [users, setUsers] = useState("");
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useStateWithCallback(1);
  const { items, requestSort } = useSortableData(users);
  const maxPageSize = 20;
  const pageNosMap = {
    1: 0,
    2: 5,
    3: 10,
    4: 15,
    5: 20,
    6: 25,
    7: 30,
    8: 35,
    9: 40,
    10: 45,
    11: 50,
    12: 55,
    13: 60,
    14: 65,
    15: 70,
    16: 75,
    17: 80,
    18: 85,
    19: 90,
    20: 95,
  };
  const sortHandler = (key) => {
    requestSort(key);
  };
  const setSkipRecordsHandler = (pageNo) => {
    const skipRecords = pageNosMap[pageNo];
    setSkip(skipRecords);
  };
  const setPageHandler = (pageNo) => {
    setPage(pageNo);
    setSkipRecordsHandler(pageNo);
  };
  const moveBack = () => {
    if (page > 1)
      setPage(page - 1, (prevPage, newPage) => setSkipRecordsHandler(newPage));
  };
  const moveFront = () => {
    if (page < maxPageSize)
      setPage(page + 1, (prevPage, newPage) => setSkipRecordsHandler(newPage));
  };
  useEffect(() => {
    (async () => {
      try {
        const users = await fetchUsers(5, skip);
        if (users) setUsers(users);
      } catch (error) {
        console.log("error : ", error.message);
      }
    })();
  }, [skip]);
  return (
    <>
      {items.length > 0 ? (
        <div className={styles["users-container"]}>
          <table className={styles["grid-table"]}>
            <GridHeader sortHandler={sortHandler} />
            <GridBody setIsOpen={setIsOpen} items={items} />
          </table>
          <GridFooter
            footerBody={
              <Pagination
                items={items}
                setPageHandler={setPageHandler}
                page={page}
                moveBack={moveBack}
                moveFront={moveFront}
              />
            }
          />
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
};

export default Grid;
