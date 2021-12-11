import day from "dayjs";
import {useState} from "react";


const useDate = ()=>{
  const today = day(new Date()).format('YYYY-MM-DD')
  const [date ,setDate] = useState(today)
  const isToday = (date: string) => {
    return date === today
  }
  const isYesterday = (date: string) => {
    const yesterday = day(new Date()).subtract(1, 'day').format('YYYY-MM-DD');
    return date === yesterday;
  }
  const isBeforeYesterday = (date: string) => {
    const beforeYestoday = day(new Date()).subtract(2, 'day').format('YYYY-MM-DD');
    return date === beforeYestoday;
  }
  const shownDate = (date: string) => {
    switch (true) {
      case isToday(date):
        return '今天';
      case isYesterday(date):
        return '昨天';
      case isBeforeYesterday(date):
        return '前天'
      default:
        return date
    }

  }



  return {date,setDate,shownDate}
}

export {useDate}