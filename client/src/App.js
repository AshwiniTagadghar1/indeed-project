import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import routhPath from "./routes/route";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AllPosts from "./pages/AllPosts";

export function App() {
  return(
  <Router>
    <Routes>
      <Route path ={routhPath.home} element ={<Home />}/>
      <Route path = {routhPath.create} element = {<CreatePost/>} />      
      <Route path = {routhPath.posts} element = {<AllPosts/>} />
    </Routes>
  </Router>
  )
}
export default App;