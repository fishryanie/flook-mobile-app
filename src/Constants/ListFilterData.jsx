const listAllowed = [
  { _id: '1', name: 'All', allowedAge: ['All'], isSelected: true },
  { _id: '2', name: 'Lower 12 age', allowedAge: [0, 11], isSelected: false },
  { _id: '3', name: '12 - 18 age', allowedAge: [12, 18], isSelected: false },
  { _id: '4', name: '18 - 30 age', allowedAge: [18, 30], isSelected: false },
  { _id: '5', name: 'More than 30 age', allowedAge: [31], isSelected: false },
];

const listChapter = [
  { _id: '1', name: 'All', chapter: ['All'], isSelected: true },
  { _id: '2', name: 'Lower 50 chapter', chapter: 49, isSelected: false },
  { _id: '3', name: '50 - 150 chapter', chapter: 150, isSelected: false },
  { _id: '4', name: '250 - 500 chapter', chapter: 500, isSelected: false },
  { _id: '5', name: '500 - 800 chapter', chapter: 800, isSelected: false },
  { _id: '6', name: '800 - 1000 chapter', chapter: 1000, isSelected: false },
  { _id: '7', name: 'More than 1000 chapter', chapter: 100000, isSelected: false },
];

const listStatus = [
  { _id: '1', name: 'All', status: ['All'], isSelected: true },
  { _id: '2', name: 'Is updating', status: ['Đang tiến hành'], isSelected: false },
  { _id: '3', name: 'Completed', status: ['Đã update'], isSelected: false },
];

const ListFilterData = {
  listAllowed,
  listChapter,
  listStatus,
};
export default ListFilterData;
