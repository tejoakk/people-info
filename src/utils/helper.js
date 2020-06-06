// getVisible
export default (peoples, search) => {
  if (search) {
    return peoples.filter(details => {
      return details.firstName.toLowerCase().includes(search.toLowerCase());
    });
  } else return peoples;
};
