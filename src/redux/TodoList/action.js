import * as types from "./types";

// Add new list
export const addNewListDoing = data => {
  return {
    type: types.ADD_LIST_DOING,
    payload: data
  };
};

export const addNewListSuccess = data => {
  return {
    type: types.ADD_LIST_SUCCESS,
    payload: data
  };
};

export const addNewListFailed = error => {
  return {
    type: types.ADD_LIST_FALSE,
    error: error
  };
};

// Get all list and card
export const getAllListAndCardDoing = () => {
  return {
    type: types.GET_ALL_LIST_AND_CARD_DOING
  };
};

export const getAllListAndCardSuccess = data => {
  return {
    type: types.GET_ALL_LIST_AND_CARD_SUCCESS,
    payload: data
  };
};

export const getAllListAndCardFailed = error => {
  return {
    type: types.GET_ALL_LIST_AND_CARD_FALSE,
    error: error
  };
};

// Get one from list
export const getListByIdDoing = listId => {
  return {
    type: types.GET_LIST_BY_ID_DOING,
    payload: listId
  };
};

export const getListByIdSuccess = data => {
  return {
    type: types.GET_LIST_BY_ID_SUCCESS,
    payload: data
  };
};

export const getListByIdFailed = error => {
  return {
    type: types.GET_LIST_BY_ID_FALSE,
    error: error
  };
};

//Add card name
export const addCardDoing = (idList, nameList, data) => {
  return {
    type: types.ADD_CARD_DOING,
    payload: {
      id: idList,
      category: nameList,
      card: data
    }
  };
};

export const addCardSuccess = (idList, nameList, data) => {
  return {
    type: types.ADD_CARD_SUCCESS,
    payload: {
      id: idList,
      category: nameList,
      card: data
    }
  };
};

export const addCardFailed = error => {
  return {
    type: types.ADD_CARD_FALSE,
    error: error
  };
};

// Get card by category
export const getCardByCategory = () => {
  return {
    type: types.GET_CARD_BY_LIST_ID_DOING
  };
};

export const getCardByCategorySuccess = data => {
  return {
    type: types.GET_CARD_BY_LIST_ID_SUCCESS,
    payload: {
      data: data
    }
  };
};

export const getCardByCategoryFailed = error => {
  return {
    type: types.GET_CARD_BY_LIST_ID_FALSE,
    error: error
  };
};

//Get All Card
export const getAllCardDoing = () => {
  return {
    type: types.GET_ALL_CARD_DOING
  };
};

export const getAllCardSuccess = data => {
  return {
    type: types.GET_ALL_CARD_SUCCESS,
    payload: data
  };
};

export const getAllCardFailed = error => {
  return {
    type: types.GET_ALL_CARD_FALSE,
    error: error
  };
};

//Get card by ID
export const getCardDoing = cardId => {
  return {
    type: types.GET_CARD_BY_CARD_ID_DOING,
    payload: cardId
  };
};

export const getCardSuccess = data => {
  return {
    type: types.GET_CARD_BY_CARD_ID_SUCCESS,
    payload: data
  };
};

export const getCardFailed = error => {
  return {
    type: types.GET_CARD_BY_CARD_ID_FALSE,
    error: error
  };
};
//Edit List Name
export const editListDoing = (idList, data) => {
  return {
    type: types.EDIT_LIST_DOING,
    payload: {
      id: idList,
      list: data
    }
  };
};

export const editListSuccess = (idList, data) => {
  return {
    type: types.EDIT_LIST_SUCCESS,
    payload: {
      id: idList,
      list: data
    }
  };
};

export const editListFailed = error => {
  return {
    type: types.EDIT_LIST_FALSE,
    error: error
  };
};

// Delete List
export const deleteListDoing = (id, arrTask) => {
  console.log(id, arrTask);

  return {
    type: types.DELETE_LIST_DOING,
    payload: {
      id: id,
      arrTask: arrTask
    }
  };
};

export const deleteListSuccess = data => {
  return {
    type: types.DELETE_LIST_SUCCESS,
    payload: data
  };
};

export const deleteListFailed = error => {
  return {
    type: types.DELETE_LIST_FALSE,
    error: error
  };
};

//Edit card
export const editCardDoing = (id, data) => {
  return {
    type: types.EDIT_CARD_DOING,
    payload: {
      id: id,
      data: data
    }
  };
};

export const editCardSuccess = (id, data) => {
  return {
    type: types.EDIT_CARD_SUCCESS,
    payload: {
      id: id,
      data: data
    }
  };
};

export const editCardFailed = error => {
  return {
    type: types.ADD_CARD_FALSE,
    error: error
  };
};

//Edit card name
export const editCardNameDoing = data => {
  return {
    type: types.EDIT_CARD_DOING,
    payload: data
  };
};

export const editCardNameSuccess = data => {
  return {
    type: types.EDIT_CARD_SUCCESS,
    payload: data
  };
};

export const editCardNameFailed = error => {
  return {
    type: types.EDIT_CARD_FALSE,
    error: error
  };
};

// update Description Card

export const upDateCardDescriptionDoing = (id, description) => {
  console.log("action doing log:", description);
  return {
    type: types.UPDATE_CARD_DESCRIPTION_DOING,
    payload: {
      id: id,
      data: description
    }
  };
};

export const upDateCardDescriptionSuccess = (id, description) => {
  console.log("action success log:", description);

  return {
    type: types.UPDATE_CARD_DESCRIPTION_SUCCESS,
    payload: {
      id: id,
      data: description
    }
  };
};

export const upDateCardDescriptionFailed = error => {
  return {
    type: types.UPDATE_CARD_DESCRIPTION_FALSE,
    error: error
  };
};

// Delete card
export const deleteCardDoing = id => {
  return {
    type: types.DELETE_CARD_DOING,
    payload: id
  };
};

export const deleteCardSuccess = data => {
  return {
    type: types.DELETE_CARD_SUCCESS,
    payload: data
  };
};

export const deleteCardFailed = error => {
  return {
    type: types.DELETE_CARD_FALSE,
    error: error
  };
};
