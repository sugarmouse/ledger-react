import {useState} from "react";
import {createId} from "./lib/createId";


const defaultTag = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
]

function useTags() {

  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTag);
  const findTag=(id:string)=> tags.filter(item => item.id === parseInt(id))[0]

  return {tags, setTags, findTag}
}

export {useTags}
