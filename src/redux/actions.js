import Api from '../utils/api'
import {
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    RECEIVE_USERDATA_ERROR,
    REQUEST_USERREPOS,
    RECEIVE_USERREPOS,
    RECEIVE_USERREPOS_ERROR,
    SELECTED_REPO,
    REQUEST_EVENTS,
    RECEIVE_EVENTS,
    RECEIVE_EVENTS_ERROR
} from './constants';

export function requestUserData() {
    return {
        type: REQUEST_USERDATA,
    };
}

function receiveUserData(json) {
    return {
        type: RECEIVE_USERDATA,
        userData: json,
    };
}

function receiveUserDataErr(error) {
    return {
        type: RECEIVE_USERDATA_ERROR,
        error,
    };
}

function requestRepos() {
    return {
        type: REQUEST_USERREPOS,
    };
}

function receiveRepos(json) {
    return {
        type: RECEIVE_USERREPOS,
        repos: json,
    };
}

function receiveReposErr(error) {
    return {
        type: RECEIVE_USERREPOS_ERROR,
        error,
    };
}

export function selectedRepo(repo) {
    return {
        type: SELECTED_REPO,
        selectedRepo: repo
    };
}

export function requestEventsData() {
    return {
        type: REQUEST_EVENTS,
    };
}

function receiveEventsData(json) {
    return {
        type: RECEIVE_EVENTS,
        eventsData: json,
    };
}

function receiveEventsDataErr(error) {
    return {
        type: RECEIVE_EVENTS_ERROR,
        error,
    };
}

export function fetchUserData(user) {
    return dispatch => {
        dispatch(requestUserData());
        return Api.get(`/users/${user}`)
            .then(json => dispatch(receiveUserData(json)))
            .catch(err => dispatch(receiveUserDataErr(err)));
    };
}

function fetchRepos(user) {
    return dispatch => {
        dispatch(requestRepos());
        return Api.get(`/users/${user}/repos`)
            .then(json => dispatch(receiveRepos(json)))
            .catch(err => dispatch(receiveReposErr(err)));
    };
}

export function fetchEventsData(user, repo) {
    return dispatch => {
        dispatch(requestEventsData());
        return Api.get(`/repos/${user}/${repo}/events`)
            .then(json => dispatch(receiveEventsData(json)))
            .catch(err => dispatch(receiveEventsDataErr(err)));
    };
}

export function fetchUserAndRepos(user) {
    return (dispatch, getState) => {
        return dispatch(fetchUserData(user)).then(() => {
            return dispatch(fetchRepos(user));
        });
    };
}

function searchRepos(language) {
    return dispatch => {
        dispatch(requestRepos());
        return Api.get(`/search/repositories?q=language%3A${language}`)
            .then(json => dispatch(receiveRepos(json)))
            .catch(err => dispatch(receiveReposErr(err)));
    };
}
