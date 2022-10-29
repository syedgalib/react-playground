import ThemeContext from '../contexts/theme-context/context';
import { useContext } from 'react';

function App() {
    const themeData = useContext( ThemeContext );

    return (
        <div className="content-area">
            <h2>You are using {themeData.theme} theme</h2>            
        </div>
    );
}

export default App;