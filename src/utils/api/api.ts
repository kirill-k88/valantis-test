import { PAGINATION_LIMIT, RESTDB_URL_PATH } from '../constants/constants';
import { errorHandler } from '../functions/errorHandler';
import { getXAuth } from '../functions/xAuthHelper';

async function doFetch(url: string, params: object) {
  const res = await fetch(url, params);

  if (!res.ok) {
    throw new Error(errorHandler(res));
  }

  return await res.json();
}

export async function getIdsFetch(offset: number) {
  const url = RESTDB_URL_PATH;
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': getXAuth('Valantis')
    },
    body: JSON.stringify({
      action: 'get_ids',
      params: { offset: offset, limit: PAGINATION_LIMIT }
    })
  };

  return await doFetch(url, params);
}

export async function getProductsFetch(ids: [string]) {
  const url = RESTDB_URL_PATH;
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': getXAuth('Valantis')
    },
    body: JSON.stringify({
      action: 'get_items',
      params: { ids: ids }
    })
  };

  return await doFetch(url, params);
}

export async function getProductBrandsFetch() {
  const url = RESTDB_URL_PATH;
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': getXAuth('Valantis')
    },
    body: JSON.stringify({
      action: 'get_fields',
      params: { field: 'brand', offset: 0, limit: 999 }
    })
  };

  return await doFetch(url, params);
}
