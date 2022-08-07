import './App.css';
import Joke from "./components/Joke";

import jokesData from "./data/jokesData";

function App() {

  // const element = <h1>Hello</h1>;
  // console.log(element);

  // const element = [
  //   {
  //     firstName: "Baz",
  //     lastName: "Murphy"
  //   }
  // ]
  // console.log(element[0].firstName);

  // const coloursOne = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
  // const coloursTwo = [
  //   <p>Red</p>, 
  //   <p>Orange</p>, 
  //   <p>Yellow</p>,
  //   <p>Green</p>, 
  //   <p>Blue</p>, 
  //   <p>Indigo</p>, 
  //   <p>Violet</p>
  // ];

  console.log(jokesData)

  const jokeElements = jokesData.map(element => {
    return <Joke 
            jokeSetup = {element.setup}
            jokePunchline = {element.punchline}
            />
  })
  
  return (
    <div className="App">
      
      {/* {coloursOne} */}
      {/* RedOrangeYellowGreenBlueIndigoViolet */}
      {/* ^ gets rendered on the page */}

      {/* {coloursTwo} */}
      {/* 
      Red

      Orange

      Yellow

      Green

      Blue

      Indigo

      Violet 
      */}
      {/* ^ gets rendered on the page */}

      {jokeElements}
     
    </div>
  );
}

export default App;

{/* 
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
*/}