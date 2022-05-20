import './SectionPosts.css';
import Post from '../Post/Post';

export default function SectionPosts() {
  return (
    <section className='posts'>
      <h2>Posts</h2>
      <Post/>
    </section>
  );
}