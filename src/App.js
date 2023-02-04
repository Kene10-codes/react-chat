import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from 'components/Chatbox';
import NavBar from 'components/Navbar';
import Welcome from 'components/Welcome';


function App() {
const [user] = useAuthState(auth);
  return (
    <div className="App">
    <NavBar />
    { user ? <ChatBox /> : <Welcome /> }
  </div>
  );
}

export default App;
