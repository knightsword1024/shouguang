import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/iothub/query/userinfo',{
    method:'post'
  });
}
export async function queryNotices() {
  return request('/api/notices');
}