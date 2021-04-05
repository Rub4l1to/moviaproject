import { getItemLS } from "../hooks/LocalStorage";

export const favFilmExists = async (Id) => {
  const favs = await getItemLS("favs");
  if (favs.length > 0) {
    const film = favs.find((element) => element.Id === Id);
    if (film) return true;
  }
  return false;
};
