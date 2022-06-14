const urlRoot = 'https://www.reddit.com';

const Reddit = {
  getSubreddits: async (type) => {
    const response = await fetch(`${urlRoot}/subreddits/${type}.json`);
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

  getSubredditByName: async (subName) => {
    const response = await fetch(`${urlRoot}/r/${subName}/about.json`);
    if(response.ok){
      const json = await response.json();
      return {
        name: json.data['display_name'],
        nameId: json.data.name,
        headerImg: json.data['header_img'],
        headerTitle: json.data['header_title'],
        title: json.data.title,
        color: json.data['primary_color'],
        icon: json.data['icon_img'],
        subscribers: json.data.subscribers,
        id: json.data.id,
        description: json.data['public_description'],
        created: json.data.created,
        type: json.data['subreddit_type'],
        over18: json.data['over18'],
      };
    };
  },

  getSubredditPosts: async (subreddit) => {
    const response = await fetch(`${urlRoot}${subreddit}.json`);
    const json = await response.json();
        
    return json.data.children.map((post) => {
      return {
        subreddit: post.data.subreddit,
        subredditObj: {},
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
  },

  getPostById: async(url) => {
    const response = await fetch(`${urlRoot}${url}.json`);
    const json = await response.json();    
    return json;
  },

  getSearchResults: async(searchTerm) => {
    const response = await fetch(`${urlRoot}/search.json${searchTerm}`);
    const json = await response.json();
    return json.data.children.map((post) => {
      return {
        subreddit: post.data.subreddit,
        subredditObj: {},
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
  },

  getSubSearchResults: async(searchTerm) => {
    const response = await fetch(`${urlRoot}/subreddits/search.json${searchTerm}`);
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
};

export default Reddit;

/*

export const getPostComments = async (permalink) => {
  const response = await fetch(`${urlRoot}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
*/