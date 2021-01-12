
import { Provider } from 'react-redux';
import './App.css';
import RouterFunction from './Router/RouterFunction';
import { store } from "./Store"

function App() {
  return (
    <div className="container">
    <Provider store={store}>
     <RouterFunction />
     </Provider>
    </div>
  );
}

export default App;
