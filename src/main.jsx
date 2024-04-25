import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './Context/AppContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  //BrowserRouter for routing the pages
  //AppContext for using all the state values 
  <Router>
  <AppContext>
         <App />
  </AppContext>
  </Router>
)
