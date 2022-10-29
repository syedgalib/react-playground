import './../style/style.css';

import Header from './../partials/Header.jsx';
import Sidebar from './../partials/Sidebar.jsx';
import Contents from './../partials/Contents.jsx';
import Footer from './../partials/Footer.jsx';

import ThemeContext from '../contexts/theme-context/context';
import { useContext } from 'react';

function App() {

    const themeData = useContext( ThemeContext );

    return ( 
        <div className={'context-app main ' + themeData.theme}>
            {/* Header */}
            <Header/>

            {/* Body */}
            <div className="body-container">
                <Sidebar/>
                <Contents/>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
     );
}

export default App;