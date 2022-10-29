import ThemeContext from './../contexts/theme-context/context';
import { useContext } from 'react';

import Menu from './Menu.jsx';

function App() {
    const themeData = useContext( ThemeContext );

    const changeTheme = (e) => {
        e.preventDefault();
        themeData.changeTheme( 'dark' );
    };

    const switchTheme = (e) => {
        e.preventDefault();
        themeData.switchTheme();
    };

    return (
        <div className="header-container">
            <Menu/>

            <div className="header-actions">
                <button type='button' onClick={switchTheme}>Switch Theme</button>
            </div>
        </div>
    );
}

export default App;