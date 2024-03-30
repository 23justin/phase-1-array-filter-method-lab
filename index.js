const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// code your solution here
function findMatching(drivers, sought) {
  return drivers.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
  );
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(name.toLowerCase()) === 0
  );
}

function matchName(drivers, soughtName) {
  return drivers.filter((record) => record.name === soughtName);
}

