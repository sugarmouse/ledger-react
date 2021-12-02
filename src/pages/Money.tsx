import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";
import {useState} from "react";




const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


function Money() {

  type Category = '-'|'+';
  const [selected, setSelected] = useState({
    tags:[] as string[],
    note:'',
    category: '-' as Category,
    amount: 0
  })

  return (
    <MyLayout>
      <div>{selected.amount}</div>
      <TagsSection value= {selected.tags}
                   onChange={(tags)=>{
                     setSelected({
                       ...selected,
                       tags: tags
                     })
                   }}/>
      <NoteSection value={selected.note}
                   onChange={(note)=>{
                     setSelected({
                       ...selected,
                       note: note
                     })
                   }}/>
      <CategorySection
        value={selected.category}
        onChange={(category)=>{
          setSelected({
            ...selected,
            category: category
          })
        }}/>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount)=>{
          setSelected({
            ...selected,
            amount: amount
          })}}
        onOk={()=>{}}
      />
    </MyLayout>
  );
}

export default Money;