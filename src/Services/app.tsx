import { API_MANGA, API_AUTHOR, API_GENRE, API_CHAPTER} from '../Configs/Api'
import { requestAPI } from '../Utils/GlobalFunc';

//===================================|| Genre ||===============================//

const findGenre = async () => {
  const request = {
    method: 'GET',
    api: API_GENRE + '/getGenre',
  };
  const response = await requestAPI(request);
  return response;
};

const createGenre = async (data: any) => {
  
}

const updateGenre = async (data: any) => {
  
}

const removeGenre = async (data: any) => {
  
}

const deleteGenre = async (data: any) => {
  
}


//===================================|| Author ||===============================//

const findAuthor = async () => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: API_AUTHOR + '/getAuthor',
  };
  const response = await requestAPI(request);
  return response;
};

const createAuthor = async (data: any) => {

}

const updateAuthor = async (data: any) => {

}

const removeAuthor = async (data: any) => {

}

const deleteAuthor = async (data: any) => {

}


//===================================|| Books ||================================//

const findManga = async (data: any) => {
  console.log('sevice')
  const request = {
    method: 'POST',
    api: API_MANGA + `/filterManga?page=${data.page}&sort=${data.sort}`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

export const findMangaById = async (id: string)  => {
  const request = {
    method: 'GET',
    api: `${API_MANGA}/getMangaById/${id}`,
  }
  const response = await requestAPI(request)
  return response
}


const createBook = async (data: any) => {

}

const updateBook = async (data: any) => {
  
}

const removeBook = async (data: any) => {
  
}

const deleteBook = async (data: any) => {
  
}


//==================================|| Chapters ||===============================//

export const findChapterById = async (id: string)  => {
  const request = {
    method: 'GET',
    api: `${API_CHAPTER}/getChapterById/${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const findChapterByMangaId = async (data: any) => {
  console.log('sevice')
  const request = {
    method: 'POST',
    api: `${API_CHAPTER}/getChapterByMangaId/${data.id}?page=${data.page}&sort=${data.sort}`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}


export default {
  findManga, findMangaById, createBook, updateBook, removeBook, deleteBook, 
  findGenre, createGenre, updateGenre, removeGenre, deleteGenre,
  findAuthor, createAuthor, updateAuthor, removeAuthor, deleteAuthor,
  findChapterById, findChapterByMangaId
}