import React,{Component} from 'react';
import './component/Navbar/Navbar'
import './App.scss';
import Navbar from './component/Navbar/Navbar';
import TourList from './component/TourList'

class App extends Component {
  render() { return   (
    
      
    
      <main>
        <script src="https://kit.fontawesome.com/90568e384a.js" crossorigin="anonymous"></script>

        <Navbar />
        <TourList />

      </main>
     
  )
  }
}

export default App