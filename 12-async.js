// what is an async function?
// async function is a function that returns a promise
// async functions are a way to write asynchronous code in a more readable and maintainable way.


//api calling
//old method
fetch('https://fakestoreapi.com/products')
  .then((response) => { return response.json()})
  .then((data) => {console.log(data)});
  

// new method

const fetchData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }

}
fetchData();

// function to take only title from the api using For Loop
const fetchData1 = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }

}
fetchData1();

// function to take only title from the api using For of Loop
const fetchData2 = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    for (const item of data) {
        console.log(item.title);
    }

}
fetchData2();

// function to take only title from the api using map 
const fetchData3 = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const titles = data.map(item => item.title);
    console.log(titles);
}
fetchData3();