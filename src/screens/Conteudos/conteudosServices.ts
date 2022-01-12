import qs from 'qs';
import { api } from '../../services/api';

type PropsNews = {
  page: number;
}

export function getNews({page}:PropsNews) {
  const params = {
    page,
  }
  const url = `&${qs.stringify(params)}`
  return api
    .get(url)
    .then((res)=> {
      return res.data.results
    })
    .catch((err) => `Ocorreu um erro${err}`)

  
}