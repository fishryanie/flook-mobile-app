import actionTypes from "../Actions/constants";

interface ObjListFilter {
  author: Array<string>
  genre: Array<string>
  status: Array<string>
  chapter: Array<string>
  allowedAge: Array<string>
  sortByName: string
  sortByDate: string
  sortByView: string
  sortByReview: string
}

interface initialState {
  listGenre: Array<string>;
  listAuthor: Array<string>;
  listStatus: Array<string>;
  listAllowed: Array<string>;
  listBook: Array<string>;
  listChapter: Array<string>;
  listFilter: ObjListFilter;
  sortObj: object,
  oneManga: object;
  oneChapter: object;
  countBook: number;
  countChapter: number;
}

const initialState: initialState = {
  listBook: [],
  listGenre: [],
  listAuthor: [],
  listStatus: [],
  listAllowed: [],
  listChapter: [],
  listFilter: {
    author: [],
    genre: [],
    status: [],
    allowedAge: [],
    chapter: [],
    sortByName: "",
    sortByDate: "",
    sortByView: "",
    sortByReview: ""
  },
  sortObj: {
    sortByName: "",
    sortByDate: "",
    sortByView: "",
    sortByReview: ""
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
      console.log("🚀 ~ file: book.tsx ~ line 72 ~ BookReducer ~ action.payload", action.payload)
      return { ...state, listFilter: action.payload }

    }
    case actionTypes.setSortObj: {
      return { ...state, sortObj: action.payload }
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