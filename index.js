// Code your solution here

findMatching = (drivers, string) => {
  drivers.filter( driver => driver.toUpperCase() === string.toUppserCase())
};


fuzzyMatch = (drivers, string) => {
  drivers.filter( driver => string.split("").include? driver.split("")[0] )
};

matchName = (drivers, string) => {
  
};
