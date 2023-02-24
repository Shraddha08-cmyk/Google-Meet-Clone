import './App.css';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useAppContext } from './context/appContext';
import VideoChat from './VideoChat';

function App() {

  const { appState } = useAppContext();

  return (
    <div className="App">
      {appState === "login" && <Login />}
      {appState === "home" && (
        <main>
          <VideoChat />
        </main>
      )}
    </div>
  );
}

export default App;
