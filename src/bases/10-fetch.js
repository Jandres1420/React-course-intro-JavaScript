const apiKey = "X5QisaFxhgTrGWmxeitbinYhpWrLTYqq";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);
// peticion para un get usando fetch, ya que fetch es 
// una promesa por lo que tiene then y catch y para ponerlo en formato json se uso .json() que tambien es una cadena 
// peticion
//   .then((resp) => {
//     resp.json().then((data) => console.log(data));
//   })
//   .catch(console.warn);

// una mejor forma de hacerlo es encadenando promesas

peticion
  .then(resp => resp.json())
  .then(({data}) => {
    const {url} = data.images.fixed_width_still;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);

