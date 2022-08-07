import React from "react";

function Joke(props) {

    // console.log(props)

    // if (!props.jokeSetup) {
    //     return (
    //         <div className="joke-container">
    //             <p className="joke-punchline">{props.jokePunchline}</p>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="joke-container">
    //             <p className="joke-setup">{props.jokeSetup}</p>
    //             <p className="joke-punchline">{props.jokePunchline}</p>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="joke-container">
    //         <p className="joke-setup" style={{display: props.setup ? "block" : "none"}}></p>
    //         <p className="joke-punchline">{props.jokePunchline}</p>
    //     </div>
    // );

    return (
        <div className="joke-container">
            {props.jokeSetup && <p className="joke-setup">{props.jokeSetup}</p>}
            <p className="joke-punchline">{props.jokePunchline}</p>
        </div>
    );
    
}

export default Joke;