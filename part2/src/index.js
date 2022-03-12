import ReactDOM from 'react-dom';
import App from './App.js';
import axios from 'axios';

axios.get('http://localhost:3001/notes')
  .then(response => {
    ReactDOM.render(
      <App notes={response.data} />,
      document.getElementById('root')
    );
  });
