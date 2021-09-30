//bring this array of numbers from data.text file
let numbers = [
  10,
  10,
  31,
  19,
  18,
  21,
  55,
  23,
  20,
  10,
  10,
  78,
  80,
  99,
  15
];

console.log("Original numbers list: ", numbers);

//the first loop [i] is work on the number of iterations(number of passes). 
for(let i = 0 ; i < numbers.length ; i++)
{
  //the second loop [j] is work on the elements move from one element to another to compare each element 
  //with the next element of it.
  for(let j = 0 ; j < numbers.length - 1 ; j++)
  {
    //The error in the code is (numbers[i]) the correct code (numbers[j]) because we are in the for loop of [j] 
    //and it's compare the each element with the next one of it at each pass.
    //The algorithm will only recognise that the list is in order if it makes no changes in a pass.
    if(numbers[j] > numbers[j + 1])
    {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = temp;
    }
  }
}

console.log("Numbers list After sorting: ", numbers)
//this code the same work to the ASC but the condition is different.
for(let i = 0 ; i < numbers.length ; i++)
{
  for(let j = 0 ; j < numbers.length - 1 ; j++)
  {
    //The error in the code is (numbers[i]) the correct code (numbers[j]) because we are in the for loop of [j] and 
    //it's compare the each element with the next one of it at each pass.
    if(numbers[j] < numbers[j + 1])
    {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = temp;
    }
  }
}

console.log("Numbers list After Desc sorting: ", numbers)


