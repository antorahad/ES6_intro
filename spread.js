const max = Math.max(6,23,45,1,89,23);

console.log(max);

const numbers = [3,5,2,45,5,43,90,32,15];

// ... this is called spread operator

const arrayMax = Math.max(...numbers);

console.log(arrayMax);


//using spread operator using to copy

const nums = [4,5,87,9];

const nums2 = nums;

const nums3 = [...nums];

nums.push(100);

const nums4 = [...nums3, 200];

console.log(nums);
console.log(nums2);
console.log(nums3);
console.log(nums4);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ]

const array = [...nayikas];

console.log(array);