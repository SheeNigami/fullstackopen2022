// import logo from './logo.svg';
// import './App.css';

function App() {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is now {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  );
}

export default App;
