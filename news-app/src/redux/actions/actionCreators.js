export const linksStateChangeAction = (payload) => ({
  type: 'LINKS_STATE_CHANGE',
  payload,
});

export const countryChangeAction = (payload) => ({
  type: 'COUNTRY_CHANGE',
  payload,
});

export const getTopNewsAction = (payload) => ({
  type: 'GET_TOP_NEWS_REQUESTED',
  payload,
});
