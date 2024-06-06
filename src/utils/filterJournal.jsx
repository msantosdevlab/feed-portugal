export const filterJournal = (item) => {
  return item.source.url.slice((item.source.url.length - 2), item.source.url.length) === "pt" ||
  item.source.url.includes("https://dioguinho.com") ||
  item.source.url.includes("https://www.noticiasaominuto.com") ||
  item.source.url.includes("https://www.zapping-tv.com") ||
  item.source.url.includes("https://www.magazine-hd.com");
};

