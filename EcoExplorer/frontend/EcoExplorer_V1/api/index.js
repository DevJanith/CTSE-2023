import axios from "axios";

const aquaOrgAPI = axios.create({
  //your IP address here
  //   baseURL: "http://192.168.1.3:8000/rest-api/v1/",
  // baseURL: "http://192.168.100.84:5000/rest-api/v1/",
  // baseURL: "http://192.168.8.107:8000/rest-api/v1/",
  baseURL: "http://192.168.43.145:8000/rest-api/v1/",
  // baseURL : "http://aqua-org.herokuapp.com/rest-api/v1/"
});

export const login = (data) => aquaOrgAPI.post(`users/login`, data);
export const registration = (data) => aquaOrgAPI.post(`users/register`, data);
export const resetPassword = (data) =>
  aquaOrgAPI.put(`users/password-reset`, data);
export const getUser = (id) => aquaOrgAPI.get(`users/${id}`);
export const updateUser = (id, data) => aquaOrgAPI.put(`users/${id}`, data);

export const createQuestionAnswers = (data) =>
  aquaOrgAPI.post(`question-answers/`, data);
export const getAllQuestionAnswers = () => aquaOrgAPI.get(`question-answers/`);
export const getQuestionAnswers = (id) =>
  aquaOrgAPI.get(`question-answers/${id}`);
export const getQuestionAnswersAccordingToType = (type) =>
  aquaOrgAPI.get(`question-answers/question-type/${type}`);

export const createMarks = (data) => aquaOrgAPI.post(`marks/`, data);
export const getAllMarks = () => aquaOrgAPI.get(`marks/`);
export const getMarksAccordingToUserId = (userId) =>
  aquaOrgAPI.get(`marks/${userId}`);
export const deleteMarks = (id) => aquaOrgAPI.delete(`marks/${id}`);

export const createSeaAnimal = (data) => aquaOrgAPI.post(`info/`, data);
export const getAllSeaAnimals = () => aquaOrgAPI.get(`info/`);
export const getSeaAnimal = (id) => aquaOrgAPI.get(`info/${id}`);
export const deleteSeaAnimal = (id) => aquaOrgAPI.delete(`info/${id}`);
export const updateSeaAnimal = (id) => aquaOrgAPI.put(`info/${id}`);
export const getSeaAnimalbyEmail = (email) => aquaOrgAPI.get(`info/${email}`);

export const createDonation = (data) => aquaOrgAPI.post(`donation/`, data);
export const getAllDonation = () => aquaOrgAPI.get(`donation/`);
export const getDonation = (id) => aquaOrgAPI.get(`donation/${id}`);
export const deleteDonation = (id) => aquaOrgAPI.delete(`donation/${id}`);
export const updateDonation = (id) => aquaOrgAPI.put(`donation/${id}`);

export const createCreativity = (data) => aquaOrgAPI.post(`creativity/`, data);
export const getAllCreativity = () => aquaOrgAPI.get(`creativity/`);
export const getCreativity = (id) => aquaOrgAPI.get(`creativity/${id}`);
export const deleteCreativity = (id) => aquaOrgAPI.delete(`creativity/${id}`);
export const updateCreativity = (id) => aquaOrgAPI.put(`creativity/${id}`);


export default aquaOrgAPI;
