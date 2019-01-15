export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function fetchItems() {
  return dispatch => {
    dispatch(itemsHasErrored(false));
    dispatch(itemsIsLoading(true));
    const url =
      'https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list';
    const options = {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Basic aGFyZDpoYXJk'
      })
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then(data => {
        dispatch(itemsIsLoading(false));
        dispatch(itemsFetchDataSuccess(data));
      })
      .catch(err => {
        dispatch(itemsIsLoading(false));
        dispatch(itemsHasErrored(true));
        console.log('ERROR! Code', err.status);
      });
  };
}
