import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Layout from './Layout.js';
import Chats from './pages/Chats/Chats.js';
import Doctors from './pages/Doctors/Doctors.js';
import Profile from './pages/Profile/Profile.js';

function App() {
  const clientName = "Peter";
  const medicalTests = ["Complete Blood Picture", "Sexually Transmitted Diseases", "Iron and Folic Acid Studies", "Hb electrophoresis", "Thyroid Profile", "TB"];

  const factSheets = ["Fact Sheet 1", "Fact Sheet 2", "Fact Sheet 3", "Fact Sheet 4", "Fact Sheet 5", "Fact Sheet 6",]
  
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home clientName={clientName} medicalTests={medicalTests} factSheets={factSheets}/>} />
          <Route path='chats' element={<Chats />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
  );
}

export default App;
