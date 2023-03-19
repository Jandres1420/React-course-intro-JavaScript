const getImagen = async () => {
  try {
    const apiKey = "X5QisaFxhgTrGWmxeitbinYhpWrLTYqq";
    //Va a esperar por que tiene el await el resp, y si o si tiene que estar dentro dde un async
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.fixed_width_still;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);

    console.log(data);
  } catch (error) {}
};

getImagen();
