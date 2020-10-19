import { getData, postData } from "./util";

// 测试
export function testHealth(json) {
  return  getData("/health", json)
}
// login
export function login(json) {
  return  postData("/login", json)
}
// logout
export function logout(json) {
  return  postData("/logout", json)
}
// addnews
export function addNews(json) {
  return  postData("/news/add", json)
}
// getnews
export function getNews(json) {
  return  getData("/news/get", json)
}
// deleteNews
export function deleteNews(json) {
  return  postData("/news/delete", json)
}