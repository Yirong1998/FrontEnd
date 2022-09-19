/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// func1: doubles the quantity and the price.
// const func1 = (arr1) =>
//   arr1.map((ele) => {
//     ele.quantity *= 2;
//     ele.price *= 2;
//     return ele;
//   });

const func1 = (arr1) => {
  temp = JSON.parse(JSON.stringify(arr1));
  temp.map((ele) => {
    ele.quantity *= 2;
    ele.price *= 2;
    return ele;
  });
  return temp;
};

// func2: filter item quantity <= 2 and price <= 300.
const func2 = (arr2) =>
  arr2.filter((ele) => {
    if (ele.quantity > 2 && ele.price > 300) return ele;
  });

// func3: total value.
const func3 = (arr3) =>
  arr3.reduce((acc, current) => {
    return acc + current.quantity * current.price;
  }, 0);

// const result = func1(itemsObject);
//console.log(func1(itemsObject));
//console.log(itemsObject);
//console.log(func2(itemsObject));
//console.log(func3(itemsObject));

/*
  
  Question 2
  
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// func4: convert string.
const func4 = (str) => {
  let str1 = str
    .replace(/[^a-zA-Z ]/g, " ")
    .toLowerCase()
    .split(/[ ]+/)
    .filter((ele) => {
      if (ele) return ele;
    });
  return str1.join(" ");
};
//console.log(string);
//console.log(func4(string));
//console.log(func4(string) === expectedReturnString);
/*
  
  Question 3
  
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

// func5: merge two arrays in order.
const func5 = (first, second) => {
  let newArray = [];
  first.forEach((ele, index) => {
    newArray[ele.uuid - 1] = { uuid: null, role: null, name: null };
    newArray[ele.uuid - 1].uuid = ele.uuid;
    newArray[ele.uuid - 1].name = ele.name;
    // newArray[ele.uuid - 1].role = ele.role;
  });
  second.forEach((ele, index) => {
    if (!newArray[ele.uuid - 1]) {
      newArray[ele.uuid - 1] = { uuid: null, role: null, name: null };
    }
    newArray[ele.uuid - 1].uuid = ele.uuid;
    newArray[ele.uuid - 1].role = ele.role;
    // newArray[ele.uuid - 1].name = ele.name;
  });
  return newArray;
};

// console.log(func5(first, second));
// console.log(expectedReturnArray);
//console.log(func5(first, second) === expectedReturnArray);
