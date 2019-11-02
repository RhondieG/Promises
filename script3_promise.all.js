const urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];

const p1  = axios.get('https://dog.ceo/api/breed/beagle/images/random');
const p2  = axios.get('https://dog.ceo/api/breed/chow/images/random');
const p3  = axios.get('https://dog.ceo/api/breed/akita/images/random');
const p4  = axios.get('https://dog.ceo/api/breed/dingo/images/random');
const p5 = axios.get('https://dog.ceo/api/breed/eskimo/images/random');


  Promise.all([p1, p2, p3, p4, p5])
  .then((responses) => {
      console.log("data was fetched!");
      console.log(responses)
  });