// style
import "./App.css";
import { useState } from "react";
// component
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import UserList from "./component/userList/UserList";
import NewUserForm from "./component/newuser/NewUserForm";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false1);
  };
  return (
    <>
      <div onClick={closeModal} className="App">
        <Navbar usersLength={users.length} />
        <main>
          <div className="no-users">
            {users.length === 0 && <h2>No Users</h2>}
          </div>
          <UserList users={users} deleteUser={deleteUser} />
        </main>
        {showModal && <NewUserForm addUser={addUser} />}
        <button onClick={() => setShowModal(true)} className="create-user">
          Create Users
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;

//  id: 1,
// image: "https://picsum.photos/400/400?random=1",
// firstName: "Muhammadyusuf",
// lastName: "Nematjonov",
// age: 19,
// from: "Uzbekistan",
// job: "Frontend Junior",
// gender: "Male",
