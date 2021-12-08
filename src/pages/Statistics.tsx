import {Layout} from "components/Layout";


// todo echarts 制作表格页面
const Header = ()=>{
  return (
    <h3>this is page header</h3>
  )
}

const Statistics = ()=>{
  return(
    <>
      <Layout header = {<Header/>} >
        <h1>Statistics Page</h1>
      </Layout>
    </>

  )
}
export {Statistics}