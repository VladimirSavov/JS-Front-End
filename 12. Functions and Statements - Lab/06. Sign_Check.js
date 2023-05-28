const solve = (numOne, numTwo, numThree) => {
    const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;
  
    if (negativeCount % 2 === 0) {
      return 'Positive';
    } else {
      return 'Negative';
    }
  };

console.log(solve(5, 12, -15));