import React from 'react';
import { Footer } from 'sections/Footer/Footer';
import { Header } from 'sections/Header/Header';
import { Main } from 'sections/Main/Main';

export const App: React.FC = () => (
  <div className="app">
    <Header />

    <Main />

    <Footer />
  </div>
);

// will need a game state, maybe in context
// will need something to control the timers, maybe a hook

// try to hook this to some API to get questions
// have to get bootstrap working
