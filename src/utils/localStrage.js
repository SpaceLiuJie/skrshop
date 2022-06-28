export function get(key){  //获取本地数据
    let str =  localStorage.getItem(key);
    if(!str){
      return
    }
    let reg= /[\{\[]/g
    if(str.match(reg).length !==0 ){
      return JSON.parse(str)
    }
    return str
  }
 
  export function set(key,value){  //存储本地数据
      return localStorage.setItem(key,value)
  }
  export function remove(key){  
    console.log('remove 执行'); // 移除本地相关数据
      localStorage.removeItem(key)
  }
  export function clear(){   //清空本地记录
    console.log('清空本地记录');
      localStorage.clear()
  }
  