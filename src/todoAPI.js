import axios from 'axios'

const todoAPI = axios.create({
  // 이부분이 설정객체
  baseURL: process.env.REACT_APP_API_URL
})

todoAPI.interceptors.request.use(config => {
  // 상태의 원본에 token이 있으면 넣고 아니면 안 넣고의 처리
  // 로컬스토리지를 추가하는 것만으로 token이 보내지도록 처리됨
  if(localStorage.getItem('token')) {
    config.headers['Authorization'] =  `Bearer ${localStorage.getItem('token')}`
  }
  return config // 설정객체가 config에 들어온다고 생각하면 됨
})
// axios에서는 요청을 보낼때마다 확인해서 다르게 보낼 수 있는
// 프로그래밍 방식을 지원한다.
export default todoAPI