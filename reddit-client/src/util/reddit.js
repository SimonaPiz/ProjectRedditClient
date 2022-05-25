const urlRoot = 'https://www.reddit.com';

const Reddit = {
  getSubreddits: async () => {
    const response = await fetch(`${urlRoot}/subreddits/default.json`);
    const json = await response.json();
  
    return json.data.children.map(subreddit => {
      return {
        name: subreddit.data['display_name'],
        headerImg: subreddit.data['header_img'],
        title: subreddit.data.title,
        color: subreddit.data['primary_color'],
        icon: subreddit.data['icon_img'],
        subscribers: subreddit.data.subscribers,
        id: subreddit.data.id,
        description: subreddit.data['public_description'],
        created: subreddit.data.created,
        type: subreddit.data['subreddit_type'],
        over18: subreddit.data['over18'],
      };
    });
  }

};

export default Reddit;

/*
export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${urlRoot}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${urlRoot}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${urlRoot}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
*/