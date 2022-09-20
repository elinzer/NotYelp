import { getBusinessByid } from "./business";

const GET_ALL = "ITEMS/GET_ALL";
const CREATE = "ITEMS/CREATE";
const DELETE = "ITEMS/DELETE";

const getAll = (items) => ({
  type: GET_ALL,
  payload: items,
});

const create = (item) => ({
  type: CREATE,
  payload: item,
});

const deleteItem = (itemId) => ({
  type: DELETE,
  payload: itemId,
});

export const getItems = () => async (dispatch) => {
  const res = await fetch("/api/items/");
  if (res.ok) {
    const items = await res.json();
    dispatch(getAll(items.menuitems));
  }
  return res;
};

export const createItem = (item) => async (dispatch) => {
  const res = await fetch("/api/items/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(create(data));
    dispatch(getBusinessByid(data.business_id));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  }
  return ["An error occurred. Please try again."];
};

export const deleteItemById = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteItem(itemId));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  }
  return res;
};

export default function itemReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      action.payload.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    case CREATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
