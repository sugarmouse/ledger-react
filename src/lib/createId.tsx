let i = parseInt(localStorage.getItem('maxId') || '0')
const createId = ()=>{
  i+=1
  window.localStorage.setItem('maxId',JSON.stringify(i));
  return i
}

export {createId}