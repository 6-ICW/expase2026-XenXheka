import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";
export default function App() {
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  const [users, SetUsers] = useState<string[]>([]);
  console.log(users);

  return (
    <div>
      <h1>Gebruikersregistratie</h1>
      <RegistrationForm
        onRegister={(name) => {
          users.includes(name) ? "" : SetUsers([...users, name]);
        }}
      />
      <hr />
      <UserList users={users} registeredUsers={GeregistreerdePersonen} />
    </div>
  );
}
