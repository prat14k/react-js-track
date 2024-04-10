import './App.css';
import EmailBody from './components/EmailBody';
import EmailTemplate from './components/EmailTemplate';

function App() {
  return (
    <>
      <EmailTemplate>
        <EmailBody />
      </EmailTemplate>
      
      <br /><br /><br />

      <EmailTemplate senderName="Prateek" receiverName="Pratham" salutation="Dear" regards="Thanks">
        <EmailBody />
      </EmailTemplate>
    </>
  );
}

export default App;
