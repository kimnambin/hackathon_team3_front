import React,{useState,useEffect} from 'react'
import styles2 from './Mypage.module.css'; // 마이페이지에서 가져온 스타일
import { useNavigate } from 'react-router-dom';
import AnxietyTest from '../selftest/anxiety/AnxietyTest';
import axios from 'axios';

const BlueSave = () => {
  const Navigate =useNavigate();

  const goToAnxiety=()=>{
    Navigate('/anxiety')
  }

  const [show, setShow] = useState(null); // 테스트 결과를 가져와서 담을 공간
  const [error, setError] = useState(null); // 에러시
  const [sum, setSum] = useState(0);
  const [user , setUser] =useState(null); //유저 정보 가져오기

  useEffect(() => {
    const memberToken = localStorage.getItem('memberToken');
    console.log(memberToken);

    const getTestResult = async () => {
      try {
        const response = await axios.get('http://52.78.131.56:8080/test/result', {
          headers: {
            Authorization: `Bearer ${memberToken}`
          }
        });
        setShow(response.data[2]); 
        console.log(response.data);
      } catch (err) {
        setError(err);
      }
    };
    getTestResult();
  }, []);


  return (
    <div className={styles2.MyPost}>
      
        {/* 상단 부분 */}
        <div className={styles2.MyPost_top}>
            <div className={styles2.MyPost_top01}>
            <img className={styles2.Profile_img} src='./img/profile.jpg' alt='' />
            <p className={styles2.MyPost_top_p}>
                자가진단 결과
            </p>

            <p className={styles2.BlueSave_top_p}>
                <span className={styles2.BlueSaveblue}>불안</span>
                <span className={styles2.BlueSaveDate}>마지막 검사일자: {show ? new Date(show.testDate).toLocaleDateString() : '검사 내역이 없습니다.'}</span>
            </p>  
            
            </div>

            <div className={styles2.Profile_top02}>
            <p className={styles2.Profile_top02_p1} style={{marginLeft: -30}}>{show ? show.tester : ''}</p>
            </div>
        </div>

        {show &&
          <div className={styles2.resultContainer2}>
           <AnxietyTest sum={sum} />
           <button className={styles2.inspectBut00} onClick={goToAnxiety}>검사하러 가기</button>
          </div>
        }

    {!show && (
      <>
        <div className={styles2.postList00}>
          <p>
            <span>유저</span>님이 자가진단 결과의 저장내역이 없습니다. <br />
            혹시 마음이 고장난 게 느껴진다면 <br />
            검사를 통하여 내 마음을 들여다 볼 수 있습니다.🍃
          </p>
        </div>
        <div onClick={goToAnxiety} className={styles2.inspect}>
          <button className={styles2.inspectBut}>검사하러 가기</button>
        </div>
      </>
    )}

    </div>
  )
}

export default BlueSave