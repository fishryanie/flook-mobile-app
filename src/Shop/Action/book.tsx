import actionTypes from "./constants"

//===================================|| Genre ||===============================//
const findGenre = () => ({ type: actionTypes.findGenre })
const findGenreFailure = (data:any) => ({type: actionTypes.findGenreFailure, payload: data});
const findGenreSuccess = (data:any) => ({type: actionTypes.findGenreSuccess, payload: data});


//===================================|| Author ||===============================//
const findAuthor = () => ({type: actionTypes.findAuthor})
const findAuthorFailure = (data:any) => ({type: actionTypes.findAuthorFailure, payload: data});
const findAuthorSuccess = (data:any) => ({type: actionTypes.findAuthorSuccess, payload: data});



//===================================|| Manga ||================================//
const findManga = (data:any) => ({type: actionTypes.findManga, payload: data})
const findMangaFailure = (data:any) => ({type: actionTypes.findMangaFailure, payload: data});
const findMangaSuccess = (data:any) => ({type: actionTypes.findMangaSuccess, payload: data});

const findMangaById = (id:any) => ({type: actionTypes.findMangaById, payload: id})
const findMangaByIdFailure = (data:any) => ({type: actionTypes.findMangaByIdFailure, payload: data});
const findMangaByIdSuccess = (data:any) => ({type: actionTypes.findMangaByIdSuccess, payload: data});



//===================================|| Chapter ||================================//
const findChapterById = (id:any) => ({type: actionTypes.findChapterById, payload: id})
const findChapterByIdFailure = (data:any) => ({type: actionTypes.findChapterByIdFailure, payload: data});
const findChapterByIdSuccess = (data:any) => ({type: actionTypes.findChapterByIdSuccess, payload: data})

const findChapterByMangaId = (data:any) => ({type: actionTypes.findChapterByMangaId, payload: data})
const findChapterByMangaIdFailure = (data:any) => ({type: actionTypes.findChapterByMangaIdFailure, payload: data})
const findChapterByMangaIdSuccess = (data:any) => ({type: actionTypes.findChapterByMangaIdSuccess, payload: data})




export default {
  findGenre, findGenreFailure, findGenreSuccess,
  findAuthor, findAuthorFailure, findAuthorSuccess,
  findManga, findMangaFailure, findMangaSuccess,
  findMangaById, findMangaByIdFailure, findMangaByIdSuccess,
  findChapterById, findChapterByIdFailure, findChapterByIdSuccess,
  findChapterByMangaId, findChapterByMangaIdFailure, findChapterByMangaIdSuccess,
}