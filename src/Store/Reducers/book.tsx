import actionTypes from "../Actions/constants";
import ListFilterData from '../../Constants/ListFilterData'
interface ObjListFilter {
  author: Array<string>
  genre: Array<string>
  status: Array<string>
  chapter: Array<string>
  allowedAge: Array<string>
  sort: object
}

interface initialState {
  listGenre: Array<string>;
  listAuthor: Array<string>;
  listStatus: Array<object>;
  listAllowed: Array<object>;
  listSort: Array<object>;
  listBook: Array<string>;
  listChapter: Array<object>;
  listFilter: ObjListFilter;
  objFiterClear: object;
  sortObj: object;
  oneManga: object;
  oneChapter: object;
  countBook: number;
  countChapter: number;
}

const initialState: initialState = {
  listBook: [],
  listGenre: [],
  listAuthor: [],
  listStatus: ListFilterData.listStatus,
  listAllowed: ListFilterData.listAllowed,
  listChapter: ListFilterData.listChapter,
  listSort: ListFilterData.listSort,
  listFilter: {
    author: [],
    genre: [],
    status: [],
    allowedAge: [],
    chapter: [],
    sort: []
  },
  objFiterClear: {},
  sortObj: {
    name: '',
    type: ''
  },

  oneManga: {},
  oneChapter: {},
  countBook: 0,
  countChapter: 0
};


const BookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.findMangaSuccess: {
      return {
        ...state,
        countBook: action.payload.count,
        listBook: [...action.payload.data],
      }
    }
    case actionTypes.setListFilter: {
      // console.log("🚀 ~ file: book.tsx ~ line 63 ~ BookReducer ~ action.payload", action.payload)
      return { ...state, listFilter: action.payload }

    }
    case actionTypes.setSortObj: {
      return { ...state, sortObj: action.payload }
    }
    case actionTypes.setObjectClearFilter: {
      return { ...state, objFiterClear: action.payload }
    }
    case actionTypes.findMangaByIdSuccess: {
      return { ...state, oneManga: action.payload }
    }
    case actionTypes.findGenreSuccess: {
      return { ...state, listGenre: [...action.payload] }
    }
    case actionTypes.findAuthorSuccess: {
      return { ...state, listAuthor: [...action.payload] }
    }
    case actionTypes.findChapterByMangaIdSuccess: {
      return {
        ...state,
        countChapter: action.payload.count,
        listChapter: [...action.payload.data]
      }
    }
    case actionTypes.findChapterByIdSuccess: {
      return { ...state, oneChapter: action.payload }
    }

    default: return { ...state }
  }
}
export default BookReducer