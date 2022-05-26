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
  },

  getSubredditPosts: async (subreddit) => {
    const response = await fetch(`${urlRoot}${subreddit}.json`);
    const json = await response.json();
  
    return json.data.children.map((post) => {
      return {
        subreddit: post.data.subreddit,
        title: post.data.title,
        name: post.data.name,
        vote: post.data['upvote_ratio'],
        ups: post.data.ups,
        mediaSec: post.data['secure_media_embed'],
        score: post.data.score,
        created: post.data.created,
        urlPost: post.data['url_overridden_by_dest'],
        over18: post.data['over_18'],
        subredditId: post.data['subreddit_id'],
        id: post.data.id,
        author: post.data.author,
        numComments: post.data['num_comments'],
        url: post.data.url,
        media: post.data.media
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