import { GET_SINGERS_LIST } from "@/view/singers/store/constants";
import { getHotSingerListRequest } from "@/api/request";
// 歌手列表
export const changeSingersList = (data) => {
  return {
    type: GET_SINGERS_LIST,
    data,
  };
};

export const getSingersList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0)
      .then((res) => {
        const data = res.artists;
        dispatch(changeSingersList(data));
      })
      .catch((e) => {
        console.log(e, "热门歌手数据获取失败");
      });
  };
};
