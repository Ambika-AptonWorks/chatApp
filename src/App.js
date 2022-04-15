import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App =() =>{
  if(!localStorage.getItem('username')) 
      return <LoginForm />
  return (
    <div className="App">
      <ChatEngine 
       height="100vh"
       projectID="69a2c1b2-a809-4833-bca5-366447121c48"
       userName="Ambika"
       userSecret="9876"
       renderConnectionBar={(chat) => {}}
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default App;
