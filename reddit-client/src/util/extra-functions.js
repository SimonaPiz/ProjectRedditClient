//convert date in milliseconds to string(for post or subreddit...)
export const convertDate = (date, hour=true) => {
  const newDate = new Date(date * 1000);
  let setDate;
  if (hour){
    setDate = newDate.getHours() + ':' + newDate.getMinutes() + ' - ' + newDate.toLocaleDateString();
  } else {
    setDate = newDate.toLocaleDateString();
  };
  
  return setDate;
};

//convert num of comments if is more than 1000
export const convertToK = (num) => {
  if (num < 1000) {
    return num;
  } else if (num > 1001 && num < 1000000) {
    return (num/1000).toPrecision(2) + 'k';
  } else {
    return (num/1000000).toPrecision(3) + 'm';
  };
};
