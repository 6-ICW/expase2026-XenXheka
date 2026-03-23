import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  const [GeregistreerdePersonen, SETgeregisreerdePersonen] = useState([
    "Karel",
    "Els",
    "Piet",
  ]);
  return (
    <div>
      <RegistrationForm
        onRegister={(name) =>
          SETgeregisreerdePersonen([...GeregistreerdePersonen, name])
        }
      />
      <hr />
      <UserList />
    </div>
  );
}
