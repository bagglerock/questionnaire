import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const App: React.FC = () => (
  <div className="bg-danger">
    <h1>Weird Trivia Fun</h1>
    <Jumbotron className="mb-5">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi minima, suscipit expedita nobis sunt neque temporibus. Sed
        asperiores voluptate tempora, nesciunt, dolorum officia saepe id, in qui rem accusamus!
      </p>
    </Jumbotron>
    <footer>&copy; Oscar Villalta</footer>
  </div>
);

// will need a game state, maybe in context
// will need something to control the timers, maybe a hook

// try to hook this to some API to get questions
// have to get bootstrap working
