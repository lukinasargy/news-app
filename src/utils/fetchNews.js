const url = "https://newsapi.org/v2/everything?q=health&from=2019-12-19&to=2019-12-19&sortBy=popularity?language=en&apiKey=e6c4aa2ecd7448e291d34469d219f762";
export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}