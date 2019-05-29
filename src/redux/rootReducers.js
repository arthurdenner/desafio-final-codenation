import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    RECEIVE_USERDATA_ERROR,
    REQUEST_USERREPOS,
    RECEIVE_USERREPOS,
    RECEIVE_USERREPOS_ERROR,
    REQUEST_REPOS,
    RECEIVE_REPOS,
    RECEIVE_REPOS_ERROR,
    SELECTED_REPO,
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    RECEIVE_EVENTS_ERROR
} from './constants';

export function currentUserData(
    state = {
        isFetching: false,
        userData: {},
    },
    action
) {
    switch (action.type) {
        case REQUEST_USERDATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_USERDATA:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.userData,
            });
        case RECEIVE_USERDATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.error,
            });
        default:
            return state;
    }
}

export function selectedRepo(
    state = {
        selectedRepo: 0,
    },
    action
) {
    switch (action.type) {
        case SELECTED_REPO:
            return {
                ...state,
                selectedRepo: action.selectedRepo
            };
        default:
            return state;
    }
}

export function userRepos(
    state = {
        isFetching: false,
        repos: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_USERREPOS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_USERREPOS:
            return Object.assign({}, state, {
                isFetching: false,
                repos: action.repos,
            });
        case RECEIVE_USERREPOS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                repos: action.error,
            });
        default:
            return state;
    }
}

export function reposData(
    state = {
        isFetching: false,
        repos: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_REPOS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_REPOS:
            return Object.assign({}, state, {
                isFetching: false,
                repos: action.repos,
            });
        case RECEIVE_REPOS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                repos: action.error,
            });
        default:
            return state;
    }
}

export function currentEventsData(
    state = {
        isFetching: false,
        eventsData: {},
    },
    action
) {
    switch (action.type) {
        case REQUEST_EVENTS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_EVENTS:
            return Object.assign({}, state, {
                isFetching: false,
                eventsData: action.eventsData,
            });
        case RECEIVE_EVENTS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                eventsData: action.error,
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    currentUserData,
    selectedRepo,
    userRepos,
    reposData,
    currentEventsData,
    form: formReducer,
});

export default rootReducer;
