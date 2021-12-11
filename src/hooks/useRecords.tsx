import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isBetween from "dayjs/plugin/isBetween";

day.extend(advancedFormat)
day.extend(weekOfYear)
day.extend(isBetween)

export type NewRecordItem = {
  tagIds: number[];
  note: string;
  category: '-' | '+';
  amount: number;
  createAt: string;
}
// function Omit<type, exclude attributes>
type RecordItem = Omit<NewRecordItem, 'createAt'>

const useRecords = () => {
  const [records, setRecords] = useState<NewRecordItem[]>([])

  const addRecord = (record: RecordItem) => {
    if (record.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (record.tagIds.length <= 0) {
      alert('请选择标签');
      return false;
    }
    const newRecord = {...record, createAt: (new Date().toISOString())};
    setRecords([...records, newRecord]);
    return true;
  }
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])


  const toArray = (records: NewRecordItem[]) => {
    const hash: { [K: string]: NewRecordItem[] } = {} //{'date':[item, item...],}
    // 同一日期的 record 分到一个组内，打包成一个数组，作为 hash[date] 的值
    records.forEach(r => {
      const date = day(r.createAt).format('YYYY-MM-DD')
      if (!(date in hash)) {
        hash[date] = []
      }
      hash[date].push(r)
    })
    // 转换为数组，并且按时间 由近及远 排序
    return Object.entries(hash).sort((a, b) => {
      if (a[0] === b[0]) return 0;
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      return 0;
    })
  }
  const categoryFilter=(category:'-'|'+'|'all')=>{
    if(category==='all'){
      return  toArray(records)
    } else{
      return toArray(records.filter(r => r.category === category))
    }
  }


  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, records)


  return {records, addRecord, categoryFilter, toArray}
}

export {useRecords}
