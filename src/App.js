import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import {useState} from 'react';
import { useParams } from 'react-router-dom'

function App() {
  let {login} = useParams();

  // stock tous les messages
  const [messages, setMessages] = useState({})
  const [pseudo, setPseudo] = useState(login)

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    setMessages(newMessages)
  }

  const myMessages = Object.keys(messages).map(
    key => (
      <Message 
        key={key}
        pseudo={messages[key].pseudo}
        message={messages[key].message}
      />
    )
  )

  return (
    <div className="box">
      <div>
        <div className="messages">
          {myMessages}
        </div>
      </div>
      <Formulaire
        length={140} 
        pseudo={pseudo}
        addMessage={addMessage}
      />
    </div>
  );
}

export default App;
