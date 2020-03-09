// Code your solution here

findMatching = (drivers, string) => {
  return drivers.filter( driver => driver.toUpperCase() === string.toUppserCase())
};


fuzzyMatch = (drivers, string) => {
  return drivers.filter( driver => string.split("").includes( driver.split("")[0] ))
};

matchName = (drivers, string) => {
  return drivers.filter( driver => driver.name === string )
};
