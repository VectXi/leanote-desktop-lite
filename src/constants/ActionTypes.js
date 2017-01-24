// 以REQUEST、SUCCESS、FAILURE结尾的的action均涉及网络请求，其他的action仅仅是本地操作

/*
 * notes
 */
export const SORT_NOTE_LIST = 'SORT_NOTE_LIST';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const CHECK_NOTES = 'CHECK_NOTES';

export const GET_NOTES_REQUEST = 'GET_NOTES_REQUEST';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAILURE = 'GET_NOTES_FAILURE';

export const GET_NOTE_CONTENT_REQUEST = 'GET_NOTE_CONTENT_REQUEST';
export const GET_NOTE_CONTENT_SUCCESS = 'GET_NOTE_CONTENT_SUCCESS';
export const GET_NOTE_CONTENT_FAILURE = 'GET_NOTE_CONTENT_FAILURE';

// update local store
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_REQUEST = 'ADD_NOTE_REQUEST';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

/*
 * tags
 */
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const LINK_TAG = 'LINK_TAG';
export const UNLINK_TAG = 'UNLINK_TAG';

/*
 * notebooks
 */
export const GET_NOTEBOOKS_REQUEST = 'GET_NOTEBOOKS_REQUEST';
export const GET_NOTEBOOKS_SUCCESS = 'GET_NOTEBOOKS_SUCCESS';
export const GET_NOTEBOOKS_FAILURE = 'GET_NOTEBOOKS_FAILURE';
export const BATCH_SET_NOTEBOOKS = 'BATCH_SET_NOTEBOOKS';
export const MOVE_TO_NOTEBOOK = 'MOVE_TO_NOTEBOOK';
export const ADD_TO_NOTEBOOK = 'ADD_TO_NOTEBOOK';
export const REMOVE_FROM_NOTEBOOK = 'REMOVE_FROM_NOTEBOOK';

/*
 * user
 */
export const UPDATE_USER = 'UPDATE_USER';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const GET_LAST_USN_SUCCESS = 'GET_LAST_USN_SUCCESS';

/*
 * router
 */
export const CHANGE_PATH = 'CHANGE_PATH';

export const BATCH_ACTIONS = 'BATCH_ACTIONS';
