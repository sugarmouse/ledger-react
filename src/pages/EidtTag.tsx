import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "useTags";

type Params ={
  id: string;
}
const EditTag: React.FC = () => {
  const { tags } = useTags()
  let {id} = useParams<Params>();
  const tag = tags.filter(item => item.id === parseInt(id))[0]

  return (
    <h1>tag:{tag.name}</h1>
  )
}

export {EditTag}