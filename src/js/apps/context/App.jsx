import ThemeContext from './contexts/theme-context/ThemeContext.jsx';
import Layout from './layouts/Layout.jsx';

function App() {
    return (
        <ThemeContext>
            <Layout/>
        </ThemeContext>
    )
}

export default App;