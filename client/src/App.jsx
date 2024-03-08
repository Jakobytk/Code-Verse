import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

const App = () => {
   
    const [currentPage, setCurrentPage] = useState('about');

    const handlePageChange = (page) => {
      setCurrentPage(page);
      window.history.pushState(null, null, `/${page}`);
    };
   
    const renderPage = () => {
        switch (currentPage) {
          case 'homepage':  
            return <HomePage />;
          case 'profile':
            return <ProfilePage />;
          case 'login':
            return <Login />;
          default:
            return <HomePage />;
        }
      };
   
    return (
        <div>
            <Header onPageChange={handlePageChange}/>
                {renderPage()}
            <Footer />
        </div>
    );
}

export default App;