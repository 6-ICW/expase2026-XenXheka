interface Props {
  users: string[];
  registeredUsers: string[];
}

export default function UserList({ users, registeredUsers }: Props) {
  return (
    <>
      <h2>Geregistreerde Gebruikers:</h2>
      <ul>
        {users.map((user) => (
          <li
            style={
              registeredUsers.includes(user)
                ? { color: "green" }
                : { color: "red" }
            }
          >
            {registeredUsers.includes(user)
              ? `${user} (bekende gebruiker)`
              : `${user} (Onbekende gebruiker)`}
          </li>
        ))}
      </ul>
    </>
  );
}
