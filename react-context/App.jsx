import Header from './Header';
import Button from './Button';
import ThemeContext from './hooks/ThemeContext';

export default function App() {
  return (
    <div className='container dark-theme'>
      <ThemeContext.Provider value='light'>
        <Header />
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}
