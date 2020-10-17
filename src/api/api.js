import { getData, postData } from "./util";

// 测试
export function testHealth(json) {
  return  getData("/health", json)
}