
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from "./components/context/FeedbackContext"

function App(){


  return(
    <FeedbackProvider>
      <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route exact path="/" element={
          <>
            <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList/>
          </>
        }/>
        
        
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <AboutIconLink/>
    </div>
    
   </Router>

    </FeedbackProvider>
   
  )
}

export default App