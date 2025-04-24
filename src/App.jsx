import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <Home />;
            case 'experience':
                return <Experience />;
            case 'education':
                return <Education />;
            case 'projects':
                return <Projects />;
            case 'skills':
                return <Skills />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="app">
            <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <main className="main-content">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
