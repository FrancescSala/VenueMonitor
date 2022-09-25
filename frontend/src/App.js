import './App.css';
import LoginPage from './components/pages/LoginPage';
import VenueListPage from './components/pages/VenueListPage';
import VenueInputPage from './components/pages/VenueInputPage';
import CommonLayout from './components/layout/CommonLayout';
import AdminPage from './components/pages/AdminPage';
import MyProfilePage from './components/pages/MyProfilePage';
import ErrorPage from './components/pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<LoginPage />} /> 
        <Route path ='vm' element={<CommonLayout />}>
          <Route path ='venues/list' element={<VenueListPage />} />
          <Route path ='venues/input/:venueProps' element={<VenueInputPage />} />
          <Route path ='admin' element={<AdminPage />} /> 
          <Route path ='profile' element={<MyProfilePage />} /> 
        </Route>
        <Route path ='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
