import ThemeContext from './context';
import { useState } from 'react'

function App({ children }) {

    const Child = () => {
        return children;
    };

    const changeTheme = ( newTheme ) => {
        setThemeData(( currentThemeData ) => {
            return {
                ...currentThemeData,
                theme: newTheme,
            }
        });
    };

    const switchTheme = () => {
        setThemeData(( currentThemeData ) => {
            return {
                ...currentThemeData,
                theme: ( currentThemeData.theme === 'light' ) ? 'dark' : 'light',
            }
        });
    };

    const [themeData, setThemeData] = useState({
        theme: 'light',
        changeTheme,
        switchTheme,
    });
    
    return ( 
        <ThemeContext.Provider value={themeData}>
           <Child/>
        </ThemeContext.Provider>
    );
}

export default App;