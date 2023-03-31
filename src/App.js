import './App.css';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useAppContext } from './context/appContext';
import VideoChat from './VideoChat';

function App() {

  const { appState } = useAppContext();

  return (
    <div className="app">
      {appState === "empty" && <div></div>}
      {appState === "home" && (
        <>
          <main>
            <VideoChat />
          </main>
        </>
      )}
      {appState === "login" && <Login />}
    </div>
  );
};

export default App;
