//convert date in milliseconds to string(for post or subreddit...)
export const convertDate = (date) => {
  const newDate = new Date(date * 1000);
  const setDate = newDate.getHours() + ':' + newDate.getMinutes() + ' - ' + newDate.toLocaleDateString();
  return setDate;
};

//convert num of comments if is more than 1000
export const convertToK = (num) => {
  if (num < 1000) {
    return num;
  } else {
    return (num/1000).toPrecision(2) + 'K';
  };
};
