import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";
import {useState} from "react";
import {useRecords} from "../hooks/useRecords";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  const {addRecord} = useRecords()

  type Category = '-' | '+';
  const defaultSelected = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  }


  const [selected, setSelected] = useState(defaultSelected)

  function onChange(obj: Partial<typeof selected>) {
    setSelected({
      ...selected,
      ...obj
    })
  }

  const submit =()=>{
    if(addRecord(selected)){
      // todo 修改提示UI
      alert('提交成功');
      setSelected(defaultSelected);
    }
  };

  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds: tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note: note})}/>
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({category: category})}/>
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({amount: amount})}
        onOk={()=>{submit()}}/>
    </MyLayout>
  );
}

export default Money;