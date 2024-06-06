import { useState, useEffect, createContext } from "react";

import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import Desporto from "./components/Desporto/Desporto";
import Entretenimento from "./components/Entretenimento/Entretenimento";
import Ultimas from "./components/Ultimas/Ultimas";
import Footer from "./components/Footer/Footer";
import { fetchNews } from "./resources/fetchNews";

import "./assets/global.css";


export const Global = createContext('light');

function App() {
  const [artigosGeneral, setGeneral] = useState([]);
  const [artigosDesporto, setArtigoDesporto] = useState([]);
  const [artigosEntretenimento, setArtigosEntretenimento] = useState([]);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    fetchNews("general", setGeneral);
    fetchNews("sports", setArtigoDesporto);
    fetchNews("entertainment", setArtigosEntretenimento);
  }, []);


  return (
    <Global.Provider value={{theme, setTheme}}>
    <main id={theme}>      
      <Header />
      <Headline artigosGeneral={artigosGeneral} />
      <Desporto artigosDesporto={artigosDesporto} />
      <Entretenimento artigosEntretenimento={artigosEntretenimento} />
      <Ultimas artigosGeneral={artigosGeneral} />
      <Footer />
    </main>
    </Global.Provider>
  );
}

export default App;
