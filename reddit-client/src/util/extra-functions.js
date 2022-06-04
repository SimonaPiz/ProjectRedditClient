//convert date in milliseconds to string(for post or subreddit...)
export const convertDate = (date) => {
  const newDate = new Date(date * 1000);
  const setDate = newDate.getHours() + ':' + newDate.getMinutes() + ' - ' + newDate.toLocaleDateString();
  return setDate;
};

