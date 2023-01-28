


const getNews = async () => {
    const API_KEY = "53e488839d3447ac8adcf5714a67d90a"  //! normalde saklanmasi lazim bu tip keylerin
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`  //?harici env dosylardan almak gerekiyor =${process.env.API_KEY}

    const res = await fetch(URL);
    const data = await res.json();

    console.log(data.articles);
}

