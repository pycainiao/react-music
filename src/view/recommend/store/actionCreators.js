/**
 * 这是创建action的地方. 是个函数工厂
 */
import * as actionTypes from "./constants";

export const ceshiAdd = () => {
  return {
    type: actionTypes.ADD,
  };
}; // 如这, 导出的是个函数. 函数里,返回的是一个action对象
