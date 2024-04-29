import { useTheme } from '../ThemeContext'; // Updated path, up one level
import Button from './Button'; // Adjusted for relative path if Button is in the same directory

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
      }}
    >
      <Button variant="secondary" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </header>
  );
};

export default Header;
