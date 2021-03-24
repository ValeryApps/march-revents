import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from './features/events/EventDashboard';
import NavBar from './features/NavBar';

function App() {
  const[formOpen, setFormOpen] = useState(false)
  return (
    <>
    <NavBar setFormOpen = {setFormOpen}/>
    <Container style={{marginTop:'5rem'}} >
    <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
    </Container>
    </>
  );
}

export default App;
