const assertEqual = function(actual, expected){
  if(actual === expected){
    return console.log('Assertion Passed: ' + actual + ' === ' + expected)
  } else {
    return console.log('Assertion Failed: "' + actual + '" !== "' + expected + '"')
  }
};
// comments to push to github

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1)
