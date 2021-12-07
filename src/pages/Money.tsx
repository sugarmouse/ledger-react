import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "pages/money/CategorySection";
import {NoteSection} from "pages/money/NoteSection";
import {NumberPadSection} from "pages/money/NumberPadSection";
import {TagsSection} from "pages/money/TagsSection";
import React, {useState} from "react";
import {useRecords} from "hooks/useRecords";

// todo 页面标签过多时，限制标签展示高度，出现滚动条
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

const Money: React.FC = () => {
  const {addRecord} = useRecords()

  type Category = '-' | '+';
  const defaultSelected = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: '0' as string
  }


  const [selected, setSelected] = useState(defaultSelected)

  function updateSelected(obj: Partial<typeof selected>) {
    setSelected({
      ...selected,
      ...obj
    })
  }

  const submit = () => {
    const copySelected = {
      tagIds: selected.tagIds,
      note: selected.note,
      category: selected.category,
      amount: parseFloat(selected.amount)
    }
    if (addRecord(copySelected)) {
      // todo 修改提示UI
      alert('提交成功');
      setSelected(defaultSelected);
    }
  };

  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => updateSelected({tagIds: tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => updateSelected({note: note})}/>
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => updateSelected({category: category})}/>
      </CategoryWrapper>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => updateSelected({amount: amount})}
        onOk={() => {
          submit()
        }}/>
    </MyLayout>
  );
}

export default Money;