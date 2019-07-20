import React, {Component} from 'react';
import logo from '../assets/images/FolkArt.jpg'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class ToastDemo extends Component {
  notifyA = () => toast('Wow so easy !', {containerId: 'A'});
  notifyB = () => toast('Wow so easy too !', {containerId: 'B'});
  notifyC = () => toast('HEY Chris !', {containerId: 'C'});
  notifyD = () => toast('http://localhost:3000/', {containerId: 'D'});

  render(){
    return (
      <div>
          <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
          <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
          <ToastContainer enableMultiContainer containerId={'C'} position={toast.POSITION.TOP_LEFT} />
          <ToastContainer enableMultiContainer containerId={'D'} position={toast.POSITION.BOTTOM_RIGHT} />

          <button onClick={this.notifyA}>Notify A !</button>
          <button onClick={this.notifyB}>Notify B !</button>
          <button onClick={this.notifyC}>Notify C !</button>
          <button onClick={this.notifyD}>Notify D !</button>

      </div>
    );
  }
}

export default ToastDemo

const imgStyle = {
  background: '#125fff',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '20%',
  height: '250px',
  width: '400px',
  float: 'centre'
}

