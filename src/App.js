import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='container py-5'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
