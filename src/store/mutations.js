/**
 * Created by 梅轩 on 2019/1/1.
 */
//包含n个直接更新状态数据的对象
import {RECEIVE_HOME_DATA} from './mutation-types'
import {RECEIVE_CATELIST_DATA} from './mutation-types'
export default {
  [RECEIVE_HOME_DATA](state,{homeData}){
    //更新stat的状态数据 homeData
    state.homeData = homeData
  },
  [RECEIVE_CATELIST_DATA](state,{cateList}){
    state.cateList = cateList
  }
}
