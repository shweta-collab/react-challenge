import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./grid.module.css";

const GridBody = ({ items, setIsOpen }) => {
  const { setSelectedUserId } = useContext(UserContext);
  const onClickRowHandler = (user) => {
    setSelectedUserId(user.id);
    setIsOpen(true);
  };
  return (
    <tbody className={styles["table-body"]}>
      {items.map((user) => {
        return (
          <tr key={user.id} onClick={() => onClickRowHandler(user)}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <img
                width={60}
                height={60}
                src={user.image}
                alt={user.firstName}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default GridBody;
