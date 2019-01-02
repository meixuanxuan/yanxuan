/**
 * Created by 梅轩 on 2018/12/29.
 */
//引入 ajax 模块
import ajax from './ajax'
//发送 home 的请求
export const reqHomeData = () => ajax('/shouye_data');
export const reqCateList =() => ajax('/cateList')
export const reqFeiLeiList =()=> ajax('/fenlei_zhuanqu')
//发送 ShiWu (识物的请求)
// export const reqShiWu = () => ajax('/topicdata');
//发送获取 classify (分类请求)
// export const reqClassify = () => ajax('/navdata');
