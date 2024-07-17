import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Manager.module.css'

const Manager = () => {
  return (
    <Container>
      <div className={styles.pageText}>
        <p>관리자 페이지</p>
      </div>

      <div className={styles.acceptButtonBox}>
        <button className={styles.acceptButton1}>전문의 수락</button>
        <button className={styles.acceptButton2}>전문의 거절</button>
      </div>

      <div className={styles.requestSection1}>
        <p className={styles.situationText}>
            <span>요청일</span> <span>닉네님(@아이디)</span> <span style={{marginLeft:-55}}>첨부파일</span> <span style={{marginLeft: -15}}>상태</span>
        </p>
        <div className={styles.requestSection2}>
            <div className={styles.requestBox} style={{marginLeft: 10}}><div style={{marginLeft: 50, marginTop:13}}>yyyy-mm-dd</div></div>
            <div className={styles.requestBox}><div style={{marginLeft: 25 , marginTop:13}}>3팀 파이팅(@likelion)</div></div>
            <div className={styles.requestBox}><div style={{marginLeft: 40 , marginTop:13}}>직업상담사.pdf</div></div>
            <div className={styles.requestBox}><div style={{marginLeft: 80 , marginTop:13}}>대기</div></div> 
        </div>
      </div>

      <div className={styles.stateBox}>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
        <div className={styles.stateText}>
            <div>yyyy-mm-dd</div>
            <div>닉네님(@아이디)</div>
            <div>첨부파일</div>
            <div>상태</div>
        </div>
      </div>
    </Container>
  )
}

export default Manager
