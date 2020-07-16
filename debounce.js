const debounce = (search, timePeriod) => {
  let timeout;
  return function returnedFunction(term) {
    const debounceover = () => {
      search(term);
      timeout = null;
    };

    clearTimeout(timeout);

    timeout = setTimeout(debounceover, timePeriod);
    console.log("Input Recieved ", term);
  };
};

const search = (term) => {
  console.log("API call for search", term);
};

const debounceSearch = debounce(search, 2000);

//Simulation of debounce in search

debounceSearch("k");
debounceSearch("ke");

setTimeout(() => debounceSearch("key"), 3000);
