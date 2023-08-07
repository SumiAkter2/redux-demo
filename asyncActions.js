// const { createStore } = require("redux");
const createStore = require("redux");
const initialState = {
  loading: false,
  users: [],
  error: "",
};
const FETCH_TO_REQUEST = "FETCH_TO_REQUEST";
const FETCH_TO_SUCCESS = "FETCH_TO_SUCCESS";
const FETCH_TO_ERROR = "FETCH_TO_ERROR";

const fetchUsersRequest = () => {
  return {
    type: FETCH_TO_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_TO_SUCCESS,
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_TO_ERROR,
    payload: error,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TO_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_TO_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
