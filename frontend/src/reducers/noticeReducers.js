import {
  NOTICE_UPDATE_REQUEST,
  NOTICE_UPDATE_SUCCESS,
  NOTICE_UPDATE_FAIL,
  NOTICE_CREATE_FAIL,
  NOTICE_CREATE_REQUEST,
  NOTICE_CREATE_SUCCESS,
  NOTICE_DELETE_FAIL,
  NOTICE_DELETE_REQUEST,
  NOTICE_DELETE_SUCCESS,
  NOTICE_LIST_FAIL,
  NOTICE_LIST_REQUEST,
  NOTICE_LIST_SUCCESS,
} from "../constants/noticeConstants";

export const noticeListReducer = (state = { notice: [] }, action) => {
  switch (action.type) {
    case NOTICE_LIST_REQUEST:
      return { loading: true };
    case NOTICE_LIST_SUCCESS:
      return { loading: false, notice: action.payload };
    case NOTICE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const noticeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTICE_CREATE_REQUEST:
      return { loading: true };
    case NOTICE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case NOTICE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const noticeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTICE_DELETE_REQUEST:
      return { loading: true };
    case NOTICE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case NOTICE_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const noticeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTICE_UPDATE_REQUEST:
      return { loading: true };
    case NOTICE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case NOTICE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
