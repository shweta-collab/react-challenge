import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { fetchUser } from "../../utils";
import Portal from "../portal/Portal";
import styles from "./modal.module.css";
export default function Modal({ isOpen, handleClose }) {
  const { setUser, user, selectedUserId } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchUser(selectedUserId);
        if (user) setUser(user);
      } catch (error) {
        console.log("error : ", error.message);
      }
    })();
  }, [selectedUserId]);
  if (!isOpen) return null;
  return (
    <Portal wrapperId="react-portal-modal-container">
      <div className={styles["overlay"]}>
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <span className={styles["close-btn"]}>
              <button onClick={handleClose}>X</button>
            </span>
            <div>
              <div>
                <img
                  width={60}
                  height={60}
                  src={user.image}
                  alt={user.firstName}
                />
              </div>
              <div>
                <span>Name :</span> {user.firstName}
              </div>
              <div>
                <span>Last name :</span> {user.lastName}
              </div>
            </div>
            <div>
              <div>
                <span>Age:</span> {user.age}
              </div>
              <div>
                <span>Birth date :</span> {user.birthDate}
              </div>
            </div>
            <div>
              <div>
                <span>Phone :</span> {user.phone}
              </div>
              <div>
                <span>Email:</span> {user.email}
              </div>
            </div>
            <div>
              <div>
                <span>Address :</span> {user?.address?.address}
              </div>
              <div>
                <span>City:</span> {user?.address?.city}
              </div>
            </div>
            <div>
              <div>
                <span>University :</span> {user.university}
              </div>
              <div>
                <span>Blood Group:</span> {user.bloodGroup}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
