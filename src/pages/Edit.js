import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => { 

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  return <div className="">
    <h1>Edit</h1>
    <p>이곳은 일기 수정 페이지입니다.</p>

    <button onClick={() => { 
      navigate('/home');
    }}>home</button>
    <button onClick={() => { 
      navigate(-1);
    }}>뒤로가기</button>
  </div>
}

export default Edit;