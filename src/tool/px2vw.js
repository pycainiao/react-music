/**
 * px 转 vw. 人肉转换
 */
export const px2vw = (px) => {
  const ratio = 750; // 根据项目,自己配
  let pxValue = (parseInt(px) / ratio).toFixed(4) * 100;
  return pxValue + "vw";
};
