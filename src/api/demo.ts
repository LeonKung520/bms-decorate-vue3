import http from '@/utils/http'
import * as T from './types'

const demoApi: T.IDemoApi = {
  demo(params) {
    return http.post('/demo', params)
  }

}
export default demoApi
