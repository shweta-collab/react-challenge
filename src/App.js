import { Grid } from "./components";
import Modal from "./components/modal/Modal";
import { useState } from "react";
import UserProvider from "./context/UserContext";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserProvider>
      <div className="container">
        <Grid setIsOpen={setIsOpen} />

        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
      </div>
    </UserProvider>
  );
}

export default App;
