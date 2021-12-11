import React, {useState} from "react";
import {DetailsHead} from "./details/DetailsHead";
import styled from "styled-components";
import { useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
// import day from 'dayjs';
import {Layout} from "../components/Layout";
import {useDate} from "../hooks/useDate";
// import {useRecordsFilter} from "./Detail/useRecordsProcess";


const HeaderWrapper = styled.div`
  background: #fff;
`;
const RecordsList = styled.main`
  margin: 4px 4px auto 4px;
  border-radius: 10px;
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
        color: #999;
      }
    }
  }
`;

function Details() {
  const {shownDate} = useDate()
  const {categoryFilter} = useRecords()
  const {getTagName} = useTags()
  const [category, setCategory] = useState<'-' | '+'|'all'>('all')

  const array = categoryFilter(category)

  return (
    <Layout header={<HeaderWrapper>
      <DetailsHead value={category} onChange={(category) => setCategory(category)}/>
    </HeaderWrapper>}>
      <RecordsList>
        {array.map(([date, records]) =>
          <div key={date}>
            <h3 className='listTitle'>
              {shownDate(date)}
            </h3>
            <div className="listContent">
              {records.map(record =>
                <div key={record.createAt} className="listItem">
                  <div className="tags">
                    {record.tagIds.map(id => <span key={id}>{getTagName(id)}</span>)}
                  </div>
                  {record.note && <div className="note">{record.note}</div>}
                  <div className="amount">
                    {record.category === '-' ? '-' : ''}{record.amount}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </RecordsList>
    </Layout>

  );
}

export {Details};