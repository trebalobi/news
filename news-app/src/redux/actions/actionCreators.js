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

export const initReadyChangeAction = (payload) => ({
  type: 'INIT_READY_CHANGE',
  payload,
});

export const getCategoriesAction = (country, categories) => ({
  type: 'GET_CATEGORIES_REQUESTED',
  country,
  categories,
});

export const viewNewsItemAction = (payload) => ({
  type: 'VIEW_NEWS_ITEM',
  payload,
});
