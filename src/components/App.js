import React from 'react';
import Signup from './Signup'
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
//import PrivateRoute from './PrivateRoute';
//import ForgotPassword from './ForgotPassword';
import { UpdateProfile } from './UpdateProfile';
import { ResetPassword } from './ForgotPassword';




function App() {
  return (

    <Container className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* <Route exact path="/" element={
                <PrivateRoute>
                  <Login />
                </PrivateRoute>
              }>
              </Route>
              

              <Route path="/update-profile" element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }>
              </Route>
              */}
              <Route path="/" element={<Login />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/signup" element={<Signup />} />

              <Route path='/logout' element={<Dashboard />} />
              {/*   <Route path='/forgot-password' element={<ForgotPassword />} />   */}
              <Route path='/forgot-password' element={<ResetPassword />} />

            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>



  );
}

export default App;

