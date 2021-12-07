import Layout from "components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";
import {NewRecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background: #fff;
`;
const Item = styled.div`
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
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
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
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
      </CategoryWrapper>
      <main>
        {array.map(([date,records]) =>
          <div key={date}>
            <Header>
              {date}
            </Header>
            <div className="listContent">
              {records.map(record=>
                <Item key={record.createAt} className="list">
                  <div className="tags">
                    {record.tagIds.map(id => <span key={id}>{getTagName(id)}</span>)}
                  </div>
                  {record.note && <div className="note">{record.note}</div>}
                  <div className="amount">
                    {record.category==='-'?'-':''}{record.amount}
                  </div>
                </Item>
              )}
            </div>
          </div>
        )}
      </main>
    </Layout>

  );
}

export default Statistics;