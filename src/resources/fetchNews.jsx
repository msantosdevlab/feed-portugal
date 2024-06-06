import Cookies from "js-cookie";

const apikey_1 = "8c9e035facc97649a3223645927e5fb3";
const apikey_2 = "eb6a4934fa67a033c3392a9ee125ee9c";

export const fetchNews = async (category, setter) => {
  // Nomes chaves
  const cacheKey = `news_${category}`;
  const actualData = JSON.parse(sessionStorage.getItem(cacheKey));
  
  // 6 horas em milissegundos
  const minTime = 4 * 60 * 60 * 1000;

  // Verifica hora atual (milissegundos)
  const currentTime = Date.now();

  // Verifica se o tempo desde a última busca é menor que o tempo mínimo
  const lastFetchTime = Cookies.get(`lastFetch_${category}`) || 0;
  if ((actualData) && (currentTime - lastFetchTime < minTime)) {
    updateVar(category, setter);
    console.log("Não passou tempo");
    return; // Evita fazer uma nova solicitação dentro do intervalo mínimo
  }

  try {
    // Tentativa com a primeira chave de API (apikey_1)
    const url1 = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=pt&country=pt&max=10&apikey=${apikey_1}`;
    const res1 = await fetch(url1);
    const json1 = await res1.json();

    if (json1.hasOwnProperty("articles")) {
      sessionStorage.setItem(cacheKey, JSON.stringify(json1.articles));
      Cookies.set(`lastFetch_${category}`, currentTime.toString()); // Atualiza o tempo da última busca
      updateVar(category, setter);
      return;
    }

    // Se a primeira tentativa falhar, tenta com a segunda chave de API (apikey_2)
    const url2 = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=pt&country=pt&max=10&apikey=${apikey_2}`;
    const res2 = await fetch(url2);
    const json2 = await res2.json();

    if (json2.hasOwnProperty("articles")) {
      sessionStorage.setItem(cacheKey, JSON.stringify(json2.articles));
      Cookies.set(`lastFetch_${category}`, currentTime.toString()); // Atualiza o tempo da última busca
      updateVar(category, setter);
      return;
    }

    // Se ambas as tentativas falharem ou não retornarem artigos válidos
    console.error(
      "Nenhuma resposta válida da API após tentar ambas as chaves de API."
    );
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

const updateVar = (category, setter) => {
  const cacheKey = `news_${category}`;
  setter(JSON.parse(sessionStorage.getItem(cacheKey)));
};
