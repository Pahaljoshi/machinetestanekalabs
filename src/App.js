import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Routes from './routes/Route'
import { ToastContainer } from 'react-toastify'
import './App.css'
import '/node_modules/bootstrap/dist/js/bootstrap.js'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'
import './assets/styles/home_one/Home1.css';


function App() {
  function RouteLayout({ path }) {
    const element = useRoutes(path);
    return element;
  }

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RouteLayout path={Routes()} />
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;