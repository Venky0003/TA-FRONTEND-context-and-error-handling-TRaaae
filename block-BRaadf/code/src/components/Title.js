import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

function Title({ text }) {
  const isDarkMode = useContext(DarkModeContext);
  return (
    <h2
      className={`heading ${
        isDarkMode ? 'sub-heading-dark' : 'sub-heading-light'
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
