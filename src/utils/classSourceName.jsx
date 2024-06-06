export const getClassSourceName = (sourceName) => {
  switch (sourceName.toLowerCase().trim()) {
    case "a bola":
      return "green-dark";

    case "notícias ao minuto":
      return "blue-dark";
    case "leak":
      return "blue-dark";

    case "público":
      return "red";
    case "sic":
      return "red";
    case "wrestling pt":
      return "red";

    case "fama show":
      return "orange";
    case "dioguinho":
      return "orange";

    case "motosport":
      return "yellow";

    case "visão":
      return "blue";
    case "forever young":
      return "blue";

    case "eco":
      return "green-light";

    case "pplware":
      return "pink";

    default:
      return "purple";
  }
};
