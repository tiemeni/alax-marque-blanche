import { Provider } from 'react-redux';
import './App.css';
import MainComponent from './Components/MainComponent';
import { store } from './REDUX/Setup';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainComponent />
      </div>
    </Provider>
  );
}

export default App;
