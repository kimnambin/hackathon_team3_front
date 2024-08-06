import axios from "axios";
import { useState } from "react";

export default function UseProfileContext() {

    //나의 게시글 부분
    const [post , setPost] = useState([]);

    const fetchmypost = async () => {
        const memberToken = localStorage.getItem('memberToken'); // 여기서 가져옴
        try {
          const response = await axios.get('https://team3back.sku-sku.com/post/myposts', {
            headers: {
              Authorization: `Bearer ${memberToken}`
            }
          });
          setPost(response.data);
          console.log('ggggg', response.data)
        } catch (error) {
          console.error('데이터를 불러오는데 실패했습니다', error);
          alert('세션이 만료 되었습니다. 다시 로그인 해주세요.');
        }
      };

    //   ========================================================================================

    //댓글

    const [coment , setComent] = useState([]);

    const fetchmycomment = async () => {
        const memberToken = localStorage.getItem('memberToken'); // 여기서 가져옴
        try {
          const response = await axios.get('https://team3back.sku-sku.com/post/mycommentposts', {
            headers: {
              Authorization: `Bearer ${memberToken}`
            }
          });
          setComent(response.data);
        } catch (error) {
          console.error('데이터를 불러오는데 실패했습니다', error);
        }
      };

      //   ========================================================================================

    //북마크

    const [bookMark , setBookMark] = useState([]);

    const fetchmybookmark = async () => {
        const memberToken = localStorage.getItem('memberToken'); // 실제 토큰을 가져옴
    
        try {
          const response = await axios.get('https://team3back.sku-sku.com/post/saves', {
            headers: {
              Authorization: `Bearer ${memberToken}` // 실제 토큰을 헤더에 설정
            }
          });
          setBookMark(response.data);
        } catch (error) {
          console.error('데이터를 불러오는데 실패했습니다', error);
        }
      };

      //   ========================================================================================
      //진단 결과 보기

      const [test , setTest] =useState([]) //우울
      const [test02 , setTest02] =useState([]) //스트레스
      const [test03 , setTest03] =useState([]) //불안

      const getTestResult = async () => {
        const memberToken = localStorage.getItem('memberToken');
        try {
          const response = await axios.get('https://team3back.sku-sku.com/test/result', {
            headers: {
              Authorization: `Bearer ${memberToken}`
            }
          });
          setTest(response.data[0]);
          setTest02(response.data[1]);
          setTest03(response.data[2]); 
          console.log('자가진단 카테고리',response.data[1]);
        } catch (err) {
        }
      };
   
     


  return {fetchmypost , post,
    fetchmycomment ,coment,
    bookMark, fetchmybookmark,
    test, getTestResult , test02 , test03
    
    }
    
  }