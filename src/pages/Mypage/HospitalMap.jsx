import React, { useState, useEffect } from 'react';
import styles from './Mypage.module.css';
import commstyles from '../Community/Comm.module.css';
import { FaAngleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const HospitalMap = () => {
  const [map, setMap] = useState(null); // 지도 객체 상태
  const [markers, setMarkers] = useState([]); // 마커 객체 배열 상태
  const [pagination, setPagination] = useState(null); // 페이지네이션 객체 상태
  const [keyword, setKeyword] = useState(''); // 검색 키워드 상태
  const [ps, setPs] = useState(null); // 장소 검색 객체 상태

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=31fe1ee21bc1d16dcb5eb09b81091e8f';
    script.onload = () => {
      initializeMap();
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (map && ps) {
      searchPlaces();
    }
  }, [map, ps]);

  const initializeMap = () => {
    if (typeof window.kakao !== 'undefined') {
      const mapContainer = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3
      };
      const newMap = new window.kakao.maps.Map(mapContainer, options);
      setMap(newMap);

      const newPs = new window.kakao.maps.services.Places();
      setPs(newPs);
    } else {
      console.log('Kakao 지도 API 스크립트가 로드되지 않았습니다.');
    }
  };

  const searchPlaces = () => {
    if (!ps) return;

    ps.keywordSearch(keyword, placesSearchCB);
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlaces(data);
      setPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  const displayPlaces = (places) => {
    const placesList = document.getElementById('placesList');
    placesList.innerHTML = ''; // 기존 목록 초기화
  
    places.forEach((place, index) => {
      // 리스트 아이템 생성
      const item = document.createElement('li');
      item.className = 'item';
  
      // 마커 배경 클래스 설정
      const markerClass = `markerbg marker_${index + 1}`;

      // 리스트 아이템 내용 구성
      const content = `
        <div class="${markerClass}"></div>
        <div class="info" style="border-bottom: 1px solid #84A67F;">
          <h5>${place.place_name}</h5>
          <span class="gray">${place.address_name}</span><br>
          <span class="tel">${place.phone}</span>
        </div>
      `;
      item.innerHTML = content;
  
      // 리스트에 아이템 추가
      placesList.appendChild(item);
    });
  
    // 페이지네이션 업데이트
    updatePagination();
  };
  
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchPlaces();
  };
  
  const updatePagination = () => {
    const paginationEl = document.getElementById('pagination');
    paginationEl.innerHTML = ''; // 기존 페이지네이션 초기화
  
    if (pagination) {
      for (let i = 1; i <= pagination.last; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.onclick = () => {
          pagination.gotoPage(i);
        };
        paginationEl.appendChild(pageLink);
      }
    }
  };
  


  return (
  
    <div className={styles.map_container}>
    {/* 왼쪽 */}
    <div className={styles.CommList_left}>
      <h2 className={styles.CommList_left_h2}>커뮤니티</h2>
      <p className={styles.CommList_left_h2}>내 주변 병원을 검색하여<br />
      빠르게 가까운 병원에서<br />
      상담을 받아보세요☺️</p>
    </div>
    
    {/* 지도 있는 부분 */}
    <div className={styles.map}>
      <div className={styles.CommList_right_header}>
        <p className={commstyles.header_p}>홈 <FaAngleRight /></p>
        <p className={commstyles.header_p2}>내 주변 병원찾기</p> 
      </div>

      <div className={commstyles.CommList_right_header}>
        <p className={styles.header_p}>나의 현재 위치</p>
        <p className={styles.header_p2}>어쩌구 저쩌구...</p> 
      </div>

      <div className={styles.map_box} id='map'>
      </div>
    </div>

    {/* ============================================== */}

    {/* 젤 오른쪽 */}
    <div className={styles.location}>
    <form onSubmit={handleFormSubmit}>  
      <div className={styles.search}>
        <CiSearch className={styles.icon}/>
        <input
      type="text"
      defaultValue={keyword}
      onChange={handleKeywordChange}
      className={styles.searchBar}
      placeholder="본인 거주지 입력하기"
    />
      </div>
      </form>

    {/* 여기가 검색한 부분 */}
      <div className={styles.search_location}>
      <ul id="placesList" className={styles.placesList}>
         {/* 검색 결과 목록 */}
       </ul>
       <div id="pagination">
           {/* 페이지네이션*/}
       </div>
      </div>
    </div>
  </div>

  );
};

export default HospitalMap;
