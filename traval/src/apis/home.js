import http from "../utils/http";

export const HomeData = (params)=>http("post","/api/AjaxHelper/GetDestinationList.ashx?startcity=53&categoryid=6&startcityname=%E5%8C%97%E4%BA%AC",params)//导入http返回后给HomeDate

