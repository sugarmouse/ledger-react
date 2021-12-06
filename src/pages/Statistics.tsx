import Layout from "components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background: white;
`;

function Statistics() {
  const {records} = useRecords()
  const {getTagName} = useTags()
  const [category, setCategory] = useState<'-' | '+'>('-')
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
      </CategoryWrapper>
      <div>
        {records.map(record =>
          <div>
            {record.tagIds.map(id => <span>{getTagName(id)}</span>)}
            {record.note}
            {record.amount}
            <hr />
            {day(record.createAt).format('YYYY年MM月DD日')}
          </div>
        )}
      </div>
    </Layout>

  );
}

export default Statistics;