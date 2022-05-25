const API_ROOT = 'https://www.reddit.com';

const getSubreddits = async () =>{
  try {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    if(response.ok){
      const json = await response.json();
      return json;
    }
    throw new Error('Request failed');
  } catch(error) {
    console.log(error);
  }
};

//return json.data.children.map((subreddit) => subreddit.data);
  
const data = getSubreddits();
console.log(data.data.children);

//export default RedditData;