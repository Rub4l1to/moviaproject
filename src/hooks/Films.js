import { getFilm, getOMDBFilm } from "./Api";

export const loadFilms = async (films) => {
    let data = await Promise.all(getFilmsOMDB(films))
    return data;
}

// Private
const getFilmsOMDB = (films) =>
    films.map(async (item) => {
        const data = await getFilm(item.id);
        const res = await getOMDBFilm(data.data.imdb_id);
        const { Id = data.data.imdb_id, Title, Poster, Language, Year, Released, Plot, Genre, Actors } = res.data;
        return { Id, Title, Poster, Language, Year, Released, Plot, Genre, Actors };
    });