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

  type Category = '-' | '+';
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  })

  function onChange(obj: Partial<typeof selected>) {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags) => onChange({tags: tags})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note: note})}/>
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({category: category})}/>
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({amount: amount})}
        onOk={() => {
        }}/>
    </MyLayout>
  );
}

export default Money;