import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";

export default function Test() {
  const { user, login, logout } = useContext(AuthContext);
  
  if (!user) {
    return (
      <>
        <p>TEST</p>
        <p>Não está logado! Buxa</p>
      </>
    );
  }

  return (
    <>
      <p>TEST</p>
      <p>Está logado com a senha: {user.name}</p>
    </>
  );
}
