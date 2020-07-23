import * as types from "./types";

const initialState = {
  TodoList: [
    {
      NameList: "",
      ListTasks: [{ name: "", status: "", date: "" }],
      id: "",
      DateCreate: ""
    }
  ],
  dataEditList: [],
  dataEditCard: [],
  ListDeleted: [],
  error: [],
  loading: false,
  Tasks: [],
  taskDetail: {}
};

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    //===============Get All list
    case types.GET_ALL_LIST_AND_CARD_DOING:
      return {
        ...state,
        loading: true,
        TodoList: action.payload
      };
    case types.GET_ALL_LIST_AND_CARD_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        TodoList: action.payload
      };
    case types.GET_ALL_LIST_AND_CARD_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //=================Get All Card
    case types.GET_ALL_CARD_DOING:
      return {
        ...state,
        loading: true,
        Tasks: action.payload
      };
    case types.GET_ALL_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        Tasks: action.payload
      };
    case types.GET_ALL_CARD_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //=================Get Card By category
    case types.GET_CARD_BY_LIST_ID_DOING:
      return {
        ...state,
        loading: true,
        Tasks: action.payload
      };
    case types.GET_CARD_BY_LIST_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        Tasks: action.payload.data
      };

    case types.GET_CARD_BY_LIST_ID_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    //=================Get Card By CARD ID
    case types.GET_CARD_BY_CARD_ID_DOING:
      return {
        ...state,
        loading: true
      };
    case types.GET_CARD_BY_CARD_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        taskDetail: action.payload
      };

    case types.GET_CARD_BY_CARD_ID_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //================= Add New List
    case types.ADD_LIST_DOING:
      return {
        ...state,
        loading: true
        // TodoList: { ...TodoList, NameList: action.payload }
      };
    case types.ADD_LIST_SUCCESS:
      return {
        ...state,
        loading: false
        // TodoList: action.payload
      };
    case types.ADD_LIST_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    //==============Edit List
    case types.EDIT_LIST_DOING:
      return {
        ...state,
        loading: true,
        dataEditList: {
          id: action.payload.id,
          newName: action.payload.list
        }
      };
    case types.EDIT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        dataEditList: {
          id: action.payload.id,
          newName: action.payload.list
        }
      };
    case types.EDIT_LIST_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //======== Delete List
    case types.DELETE_LIST_DOING:
      return {
        ...state,
        loading: true,
        ListDeleted: action.payload
      };
    case types.DELETE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        ListDeleted: action.payload
      };
    case types.DELETE_LIST_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    //=========== Add Card Doing
    case types.ADD_CARD_DOING:
      return {
        ...state,
        loading: true
        // Tasks: action.payload
      };
    case types.ADD_CARD_SUCCESS:
      return {
        ...state,
        loading: false
        // Tasks: action.payload
      };
    case types.ADD_CARD_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    //=========== update description card
    case types.UPDATE_CARD_DESCRIPTION_DOING:
      return {
        ...state,
        loading: true
        // Tasks: action.payload
      };
    case types.UPDATE_CARD_DESCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false
        // Tasks: action.payload
      };
    case types.UPDATE_CARD_DESCRIPTION_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    //=============================delete card
    case types.DELETE_CARD_DOING:
      return {
        ...state,
        loading: true
        // Tasks: action.payload
      };
    case types.DELETE_CARD_SUCCESS:
      return {
        ...state,
        loading: false
        // Tasks: action.payload
      };
    case types.DELETE_CARD_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default TodoListReducer;
