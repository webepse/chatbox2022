import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

// Firebase
import database from './base';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database'

function App() {
  let {login} = useParams();

  // stock tous les messages
  const [messages, setMessages] = useState({})
  const [pseudo, setPseudo] = useState(login)

  useEffect(()=>{
   const dbMessagesRef = ref(database, 'messages')
   // écouteur d'event de changement de données
   onValue(dbMessagesRef, (snapshot) => {
     const data = snapshot.val()
     if(data)
     {
       setMessages(data)
     }
   })

  },[])

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message
    Object.keys(newMessages).slice(0,-10).forEach(key => {
      newMessages[key] = null
    })
    set(ref(database,'/'),{
      messages: newMessages
    })

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
