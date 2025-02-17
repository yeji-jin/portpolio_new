// import { useParams, navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 예제 데이터
  //   const data = [
  //     { id: "1", title: "UI 프로젝트" },
  //     { id: "2", title: "콘텐츠 프로젝트" },
  //   ];

  //   // id와 일치하는 데이터 찾기
  //   const item = data.find((el) => el.id === id);

  //   // 만약 데이터가 없으면 404 페이지로 리디렉트
  //   if (!item) {
  //     return <div>해당 경험을 찾을 수 없습니다.</div>;
  //   }

  return (
    <div>
      <details>
        <p>선택한 ID: {id}</p>
      </details>
    </div>
  );
}
