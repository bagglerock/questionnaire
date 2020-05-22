import React from 'react';
import { Footer } from 'sections/Footer/Footer';
import { Header } from 'sections/Header/Header';
import { Main } from 'sections/Main/Main';

export const App: React.FC = () => (
  <div className="app">
    <Header />

    <div className="main">
      <Main />
    </div>

    <Footer />
  </div>
);

// will need something to control the timers, maybe a hook

// try to hook this to some API to get questions
