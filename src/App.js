import Hello from './components/Hello';

function App() {

  const user = {
    yourName: "Jonathan",
    age: 25,
    loggedIn: true,
    email: "LZ4wH@example.com",
    hasPaid: false
  }

  return (
    <div className="App">
      <Hello userObj={user} />
    </div >
  );
}

export default App;


