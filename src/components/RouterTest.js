import { Link } from "react-router-dom";

const RouterTest = () => { 
  return <>
    <Link to={'/'}>HOME</Link>
    <br />
    <Link to={'/new'}>New</Link>
    <br />
    <Link to={'/edit'}>Edit</Link>
  </>
}

export default RouterTest;