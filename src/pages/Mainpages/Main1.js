import React from 'react'
import styles from './Main1.module.css'
import { Container } from 'react-bootstrap'

const Main1 = () => {
  return (
    <div>
      
      <div className={styles.mainBox}>
        <Container>
            <div className={styles.mainTitleText}>끄적임</div>
            <div className={styles.mainText}>시들어가는 나의 마음,<br/>
                따뜻하게 보듬어줄 손길을 찾는다면, <span style={{fontSize: 55}}>끄적임</span>
            </div>
        </Container>
      </div>

      <div className={styles.main2Container}>
        <div className={styles.main2Text}>
          <img src="https://media.istockphoto.com/id/932790032/ko/%EB%B2%A1%ED%84%B0/%ED%86%A0%EB%81%BC%ED%92%80-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EB%85%B9%EC%83%89-%EA%B0%9C%EC%9A%94-4-%EC%9E%8E-%ED%81%B4%EB%A1%9C%EB%B2%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%96%89%EC%9A%B4%EC%9D%84-%EB%B9%8C%EC%96%B4%EC%9A%94-%ED%85%8C%EB%A7%88-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9A%94%EC%86%8C%EC%9E%85%EB%8B%88%EB%8B%A4-%EA%B0%84%EB%8B%A8%ED%95%9C-%EA%B8%B0%ED%95%98%ED%95%99-%EB%AA%A8%EC%96%91-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg?s=612x612&w=0&k=20&c=iN-cVk2cTE5TUPrEETOn2-6GvpXa0jCox35ndtkxRtc=" alt=""/>
          <span>오늘 하루도 수고한 당신에게,</span><br/>
               끄적임이 건네는 다정함 한 스푼
        </div>

        <div className={styles.main2InBox}>
          <p>적어도 나는 네 덕분에 행복해졌다고, 말해주고 싶었어.</p>
        </div>
      </div>

      <div className={styles.main3Container}>
        <div className={styles.main3Box1}>
          <div className={styles.main3Box1Text}>
            <span>요즘들어 나의 마음이<br/>
                시들어가는 기분이 든다면,</span>
          </div>
          
          <div className={styles.main3Box1Section2}>       
            <div style={{marginLeft: 30, color: "gray"}}>유저님의 마음을 들여다 볼 자가진단</div>
            <div className={styles.line}></div>
            <div className={styles.Arrow}></div>
            <img src="https://st5.depositphotos.com/80218270/66816/v/1600/depositphotos_668167066-stock-illustration-man-doing-side-seated-wide.jpg" alt="" />
          </div>        
        </div>


        <div className={styles.main3Box2}>
          <div className={styles.main3Box2Text}>
            <span>내 집 주변<br />
                  가까운 정신의학과</span>
            <img src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-hospital-hand-drawn-cartoon-elements-png-image_6679286.jpg" alt="" />
          </div>
          <div className={styles.main2Text2}>
            <div>찾아보기</div>
            <div className={styles.line2}></div>
            <div className={styles.Arrow2}></div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Main1
