import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER, 
  ADD_MODULE,
  GET_PROJECT,
  UPDATE_SECTION_ONE,
  DELETE_PROJECT
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  console.log(profileData)
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// /projects/:projectID/:module
// Create Profile
export const addModule = (moduledata, projectID, history) => dispatch => {
  console.log(moduledata, 'PROFILE ACTION MODULE DATA')
  axios
    .post(`/api/profile/project/${projectID}`, moduledata)
    .then(res => 
      dispatch({
        type: ADD_MODULE,
        payload: res.data,
        addedModuleInfo: moduledata,
        addedSection: moduledata.location
       
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};




// Add experience
export const addProject = (expData, history) => dispatch => {
  console.log(expData)
  axios
    .post('/api/profile/project', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};





export const updateSectionOne = (data, id) => dispatch => {
  console.log(data, '*****UPDATESECTION ACTION', id, '****ID<')
  axios
    .post(`api/profile/updateProject/${id}`, data)
    .then(res =>
      dispatch({
        type: UPDATE_SECTION_ONE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};




// Delete Education
export const deleteProject = (id, history) => dispatch =>{
  console.log('DELETE!')
  axios
    .delete(`/api/profile/project/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PROJECT,
        payload: res.data
      }) 
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

    );
};


// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
export const addingModuleOne = (expData, history) => dispatch => {
  axios
    .post('/api/profile/project', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const getCurrentProject = (projectID) => dispatch => {
  axios
    .get(`/api/profile/project/${projectID}`)
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: res.data[0]
      })

  ).catch(err =>
    // console.log(err, 'THIS IS ERROR IN PROFILE ACTION')
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const addHTML = (HTML, projectID) => {

  axios
    .post(`/api/profile/project/HTML/${projectID}`, HTML)
    .then(res =>
      console.log(res, 'RESULT OF ADDING HTML')
      // dispatch({
      //   type: ADD_MODULE,
      //   payload: res.data,
      //   addedModuleInfo: moduledata,
      //   addedSection: moduledata.location
      // })
    )
    .catch(err =>
      console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};