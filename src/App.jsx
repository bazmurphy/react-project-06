import './App.css';
import Joke from "../components/Joke";

function App() {
  return (
    <div className="App">
      <Joke 
        jokeSetup="I got my daughter a fridge for her birthday."
        jokePunchline="I can't wait to see her face light up when she opens it."
      />
      <Joke 
        jokeSetup="How did the hacker escape the police?"
        jokePunchline="He just ransomware!"
      />
      <Joke 
        jokeSetup="Why don't pirates travel on mountain roads?"
        jokePunchline="Scurvy."
      />
      <Joke 
        jokeSetup="Why do bees stay in the hive in the winter?"
        jokePunchline="Swarm."
      />
      <Joke 
        jokeSetup="What's the best thing about Switzerland?"
        jokePunchline="I don't know, but the flag is a big plus!"
      />
      <Joke
        jokePunchline="It's hard to explain puns to kleptomaniacs because 
        they always take things literally."
        />
    </div>
  );
}

export default App;