import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

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
    if(record.amount<=0){
      alert('请输入金额');
      return false;
    }
    if(record.tagIds.length<=0){
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

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, records)


  return {records, addRecord}
}

export {useRecords}
