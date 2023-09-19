import './App.css';
import './style.css';
import Nav from './Nav.js';
import Promo from './Promo.js';
import Spin from './Spin.js';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Footer from './Footer';

import ModeToggler from './ModeToggler';
import RandomNumber from './RandomNumber';

import MealsProvider from './MealsProvider';
import MealsList from './MealsList';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <Nav first="HOME" second="MENU" third="ABOUT" fourth="CONTACT"/>
      <Promo text="THIS IS PROPS TEXT"/>
      <Spin />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />

      <ModeToggler />
      <RandomNumber />

      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
};

export default App;
