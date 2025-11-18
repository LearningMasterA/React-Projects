import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Footer from "./components/Footer";
import SideBar from './components/SideBar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {

  return (
  <>
  <div className='app-container'>
    <SideBar/>
    <div className='content'>
      <Header/>
      <CreatePost></CreatePost>
      <PostList></PostList>
      <Footer/>
    </div>
  </div>    
  </>
  );
  
}

export default App;
