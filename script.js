import axios from 'axios'

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

axios.get('https://dummyjson.com/products')
  .then((res) => {
    console.log(res.data);
  })

// console.log('hii');