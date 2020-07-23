import * as call from "./apiCaller";
let curTime = new Date().toLocaleString();
// List And Card =============================
export const getAllListAndCard = () => {
  return call.getDataApi(`/TodoList`);
};

export const addList = data => {
  return call.addApi(`/TodoList`, { ListName: data, DateCreate: curTime });
};

export const editTodoList = (TodoListId, data) => {
  return call.updateApi(`/TodoList/${TodoListId}`, {
    ListName: data,
    updateList: curTime
  });
};

export const deleteTodoList = TodoListId => {
  return call.deleteApi(`/TodoList`, TodoListId);
};

//  List =======================================
export const getTodoListById = TodoListId => {
  return call.getDataApi(`/TodoList${TodoListId}`);
};

// Card =============================================
export const addCard = (idList, listname, data) => {
  return call.addApi(`/CardList`, {
    IDcategory: idList,
    category: listname,
    name: data,
    DateAdd: curTime
  });
};

export const getAllCard = () => {
  return call.getDataApi(`/CardList`);
};

export const getCardByCategory = idList => {
  return call.getDataApi(`/CardList`);
};

export const getCardByID = id => {
  return call.getDataApi(`/CardList/${id}`);
};

export const editCardName = (cardID, data) => {
  return call.updateApi(`/CardList/${cardID}`, { name: data });
};

export const updateDescription = (cardID, discription) => {
  return call.updateApi(`/CardList/${cardID}`, { Description: discription });
};

export const deleteCardByCategory = arrTask => {
  return arrTask.map(task => call.deleteApi(`/CardList`, task.id));
};
export const deleteCard = cardID => {
  return call.deleteApi(`/CardList`, cardID);
};
