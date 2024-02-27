import { RESTDB_URL_PATH } from '../constants/constants';
import { errorHandler } from '../functions/errorHandler';
import { getXAuth } from '../functions/xAuthHelper';

async function doFetch(url: string, params: object) {
  const res = await fetch(url, params);

  if (!res.ok) {
    throw new Error(errorHandler(res));
  }

  return await res.json();
}

export async function getIdsFetch() {
  const url = RESTDB_URL_PATH;
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': getXAuth('Valantis')
    },
    body: JSON.stringify({
      action: 'get_ids',
      params: { offset: 10, limit: 3 }
    })
  };

  return await doFetch(url, params);
}
