import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "pages/money/CategorySection";
import {NoteSection} from "pages/money/NoteSection";
import {NumberPadSection} from "pages/money/NumberPadSection";
import {TagsSection} from "pages/money/TagsSection";
import {useState} from "react";
import {useRecords} from "hooks/useRecords";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

function Money() {
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

  const submit =()=>{
    const copySelected = {
      tagIds: selected.tagIds,
      note: selected.note,
      category: selected.category,
      amount: parseFloat(selected.amount)
    }

    if(addRecord(copySelected)){
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
        onOk={()=>{submit()}}/>
    </MyLayout>
  );
}

export default Money;