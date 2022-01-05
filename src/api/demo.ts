import axios from '@/utils/axios';

export function demoAPI({ params }: { params: any }) {
  return axios({
    url: '/api/list',
    method: 'get',
    params
  })
}
