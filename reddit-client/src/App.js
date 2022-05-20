import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SectionPosts from './Components/SectionPosts/SectionPosts';
import SectionSubreddits from './Components/SectionSubreddits/SectionSubreddits';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <SectionSubreddits/>
        <SectionPosts/>
      </main>
    </div>
  );
}

export default App;
