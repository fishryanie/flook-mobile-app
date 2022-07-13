const listAllowed = [
  { _id: '1', name: 'Lower 12 age', allowed: 11, isSelected: false },
  { _id: '2', name: '12 - 18 age', allowed: 18, isSelected: false },
  { _id: '3', name: '18 - 30 age', allowed: 30, isSelected: false },
  { _id: '4', name: 'More than 30 age', allowed: 31, isSelected: false },
];

const listChapter = [
  { _id: '1', name: 'Lower 50 chapter', chapter: 49, isSelected: false },
  { _id: '2', name: '50 - 150 chapter', chapter: 150, isSelected: false },
  { _id: '3', name: '150 - 250 chapter', chapter: 250, isSelected: false },
  { _id: '4', name: '250 - 500 chapter', chapter: 500, isSelected: false },
  { _id: '5', name: '500 - 800 chapter', chapter: 800, isSelected: false },
  { _id: '6', name: '800 - 1000 chapter', chapter: 1000, isSelected: false },
  { _id: '7', name: 'More than 1000 chapter', chapter: 1001, isSelected: false },
];

const listStatus = [
  { _id: '1', name: 'Is updating', status: 'Đang cập nhật', isSelected: false },
  { _id: '2', name: 'Completed', status: 'Đã hoàn tất', isSelected: false },
];
const listSort = [
  { _id: '1', name: 'Sort by name', type: "ASC", isSelected: false },
  { _id: '2', name: 'Sort by date', type: "ASC", isSelected: false },
  { _id: '3', name: 'Sort by view', type: "ASC", isSelected: false },
  
];

const listFilterByDate = [
  { _id: '1', name: 'This Week', value: "This Week", isSelected: false },
  { _id: '2', name: 'This Month', value: 'This Month', isSelected: false },
];

const listFilterAuthor = [
  { _id: '1', name: 'All', isSelected: true },
  { _id: '2', name: 'Hot', isSelected: false },
  { _id: '3', name: 'New', isSelected: false },
  { _id: '4', name: 'Favourite', isSelected: false },
];

const ListFilterData = {
  listAllowed,
  listChapter,
  listStatus,
  listSort,
  listFilterByDate,
  listFilterAuthor
};
export default ListFilterData;
