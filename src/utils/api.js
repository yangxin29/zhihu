import axios from 'axios'

export function getHotData (afterId) {
  return axios({
    method: 'GET',
    url: '/api/hot',
    params: {
      after_id: afterId
    }
  })
}
