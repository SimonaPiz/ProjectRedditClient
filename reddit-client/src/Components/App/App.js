import './App.css';
//importare i componenti
import NavBar from '../NavBar/NavBar';
import SectionPosts from '../../features/SectionPosts/SectionPosts';
import SectionSubreddits from '../../features/SectionSubreddits/SectionSubreddits';

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
