import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";
import {NewRecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from 'dayjs';
import {Nav} from "../components/Nav";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
const HeaderWrapper = styled.div`
  background: #fff;
`;
const RecordsList = styled.main`
  margin:4px 4px auto 4px;
  border-radius:10px ;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  overflow: scroll;
   .listTitle {
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
  }
   .listContent {
    > .listItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      font-size: 18px;
      line-height: 20px;
      padding: 10px 16px;
      > .note {
        margin-right: auto;
        margin-left: 16px;
        font-size: 16px;
        color:#999;
      }
    }
  }
`;

function Statistics() {
  // todo 最近三天以 '今天' '昨天' '前天' 展示
  const {records} = useRecords()
  const {getTagName} = useTags()
  const [category, setCategory] = useState<'-' | '+'>('-')
  const selectedRecords = records.filter(r=>r.category === category)
  const hash:{[K:string]:NewRecordItem[]} = {} //{'date':[item, item...],}

    selectedRecords.forEach(r =>{
      const key  = day(r.createAt).format('YYYY年MM月DD日')
      if (!(key in hash)){
        hash[key] = []
      }
      hash[key].push(r)
    })

  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0;
    if(a[0]> b[0]) return -1;
    if(a[0]< b[0]) return 1;
    return 0;
  })

  return (
    <PageWrapper>
      <HeaderWrapper >
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
      </HeaderWrapper>
      <RecordsList>
        {array.map(([date,records]) =>
          <div key={date}>
            <h3 className='listTitle'>
              {date}
            </h3>
            <div className="listContent">
              {records.map(record=>
                <div key={record.createAt} className="listItem">
                  <div className="tags">
                    {record.tagIds.map(id => <span key={id}>{getTagName(id)}</span>)}
                  </div>
                  {record.note && <div className="note">{record.note}</div>}
                  <div className="amount">
                    {record.category==='-'?'-':''}{record.amount}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </RecordsList>
      <Nav/>
    </PageWrapper>
  );
}

export default Statistics;