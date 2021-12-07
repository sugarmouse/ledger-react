import {useEffect, useRef, useState} from "react";
import {useUpdate} from "./useUpdate";

function useTags() {

  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  //组件挂载后获得localStorage里面的 tags 数据, localStorage tags 为空数组是，加上默认 tags
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createTagId(), name: '衣'},
        {id: createTagId(), name: '食'},
        {id: createTagId(), name: '住'},
        {id: createTagId(), name: '行'}
      ]
    }
    setTags(localTags);
  }, [])

  const count = useRef(0)
  useEffect(() => {
    count.current += 1;
  })
  useEffect(() => {
    if (count.current > 1) {
      window.localStorage.setItem('tags', JSON.stringify(tags))
    }
  }, [tags]);
  // 当tags发生变化时，更新 localStorage 的数据
  // tags: undefined -> [] -> localstorage.tags
  // 这里的 tags 必须是不同的数组，是根据tags对应的地址是否改变触发
  // 封装的useUpdate 排除了 tags: undefined-> [] 变化时，localStorage 的setItem 操作
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, tags)

  const createTagId = () => {
    let i = parseInt(localStorage.getItem('maxId') || '0')
    i += 1
    window.localStorage.setItem('maxId', JSON.stringify(i));
    return i
  }

  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (id === tags[i].id) {
        result = i;
        break;
      }
      return result;
    }
  };

  const findTag = (id: string) => tags.filter(item => item.id === parseInt(id))[0];

  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map((tag) => tag.id === id ? {id: id, name: obj.name} : tag))
  }
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  }
  const addTag = () => {
    const name = window.prompt('新增的标签名为：');
    if (name !== null && name !== '') {
      setTags([...tags, {id: createTagId(), name: name}]);
    }
  };
  const getTagName = (id: number) => {
    const tag = tags.filter(tag => tag.id === id)[0]
    return tag ? tag.name : ''
  }


  return {tags, getTagName, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag}
}

export {useTags}
