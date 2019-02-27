import {HomeData} from "../../apis/home";
export default {
   async handleHomeData(){
        let data = await HomeData({startcity: 53,categoryid: 6,startcityname: "北京"});
        console.log(data);
    }
}