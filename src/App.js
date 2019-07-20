// Based on this Tutorial
// https://www.youtube.com/watch?v=sBws8MSXN7A&t=2479s

import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import './App.css';
import About from './components/pages/About';
import Videos from './components/pages/Videos';
import BitMovin from './components/pages/BitMovin';
import Carousel from './components/pages/Carousel';
import Toast from './components/pages/Toast';
import AxiosDemo from './components/pages/Axios';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';


class App extends Component {

notify = () => toast("Wow so easy !");

  state = {
    todos: [
        {
        id: 1,
        title: 'Take our the trash',
        completed: false
        },
        {
        id: 2,
        title: 'Groceries',
        completed: false
        },
        {
        id: 3,
        title: 'Take our the trash',
        completed: false
        },
        {
        id: 4,
        title: 'Make Beds',
        completed: false
          },
        
        {
        id: 5,
        title: 'Dinner Date',
        completed: false
        },
        {
        id: 6,
        title: 'Go to Sleep',
        completed: false
          },
    ]
  }
  
  //<Router basename="/build">
  render() {
    return (
      <Router>
      <div className="App">
      <Header />

        <Route exact path="/" render={props => (
          <React.Fragment>
             <Todos todos={this.state.todos} /> 
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />

        <Route path="/Videos" component={Videos} />

        <Route path="/Carousel" component={Carousel} />

        <Route path="/BitMovin" component={BitMovin} />

        <Route path="/Toast" component={Toast} />


        <Route path="/Axios" component={AxiosDemo} />

     </div>
     </Router>
    
    )
  }
  }

export default App;
