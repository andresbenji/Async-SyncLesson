//Sync Example

// console.log("Starting the program"); //staritng the program
// const sleep = (ms) => {
//   //creating a function that will execute our time
//   let startTime = new Date().getTime();
//   console.log("program is running");

//   while (new Date().getTime() < startTime + ms) {
//     console.log("In progress");
//   }

//   console.log("program is done.");
// };

// sleep(200); //calling our function to perform

// console.log("do something else....");

//ASYNC Example
console.log("Starting program");

const sleep = (ms) => {
  console.log("program is running");
  setTimeout(() => {
    console.log("program is done");
  }, ms);
};

sleep(1000);

console.log("do something else...");
console.log(new Date().getTime());
