import './App.css';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App w-[100vw] h-[100vh] flex justify-center items-center">
      <div>
        <p className='text-[30px] font-semibold mb-7 underline'>User Informations</p>
       <Cards />
        <p className='mt-9'>Click the card to see the full information of the user</p>
      </div>
    </div>
  );
}

export default App;
