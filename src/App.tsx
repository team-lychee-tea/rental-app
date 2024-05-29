import { createUserDoc } from "@/firebase/users/request";
import "./App.css";

function App() {
  const handleCreateUser = async () => {
    try {
      const user: User = {
        id: "testId",
        name: "taro",
        photo: null,
      };
      await createUserDoc(user);
      window.alert("Success!");
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <>
      <button onClick={handleCreateUser}>create user</button>
    </>
  );
}

export default App;
