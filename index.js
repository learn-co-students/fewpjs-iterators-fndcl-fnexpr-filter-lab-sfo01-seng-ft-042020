// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(d => {
    return d.toUpperCase() == string.toUpperCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(d => {
    return d.startsWith(string);
  })
}

function matchName(drivers, string) {
  return drivers.filter(d => d.name === string);
}