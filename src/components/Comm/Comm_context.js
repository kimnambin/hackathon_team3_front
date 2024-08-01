import React, { createContext, useState , useEffect } from 'react';
import axios from 'axios';

// 이름을 CategoryContext로 사용
export const CategoryContext = createContext();

export const category = [
  { key: 'a', label: '일반 고민' },
  { key: 'b', label: '진로/취업' },
  { key: 'c', label: '학교' },
  { key: 'd', label: '직장' },
  { key: 'e', label: '대인 관계' },
  { key: 'f', label: '썸/연애' },
];

export const category2 = [
  { key: 'g', label: '결혼/육아' },
  { key: 'h', label: '이별/이혼' },
  { key: 'i', label: '가족' },
  { key: 'j', label: '성 생활' },
  { key: 'k', label: '외모' },
  { key: 'l', label: '금전' },
  { key: 'm', label: 'LGBT' },
];

export const CategoryProvider = ({ children }) => {
  const 초깃값 = category.find(cat => cat.key === 'a');
  const [categoryBtn, setCategoryBtn] = useState(초깃값);
  const [data, setData] = useState([]); // 데이터를 저장
  const [noData , setNoData] = useState(null);

  // 카테고리 데이터 가져오기
  const getCategoryData = async (categoryKey) => {
    
    try {
      const response = await axios.get(`http://52.78.131.56:8080/general/postall/${categoryKey}`, {
        // headers: { Authorization: `Bearer ${proToken}` },
      });
       // 데이터가 비어있는 경우
    if (response.data && response.data.length > 0) {
      setData(response.data);
    } else {
      setData('비어있음'); 
    }
  
      setData(response.data);
    } catch (error) {
      console.error('데이터를 불러오는데 실패했습니다', error);
      alert('데이터를 불러오지 못했습니다.');
    }
  };



  // 전체 카테고리 객체를 받도록 수정
  const ClickCategory = (category) => {   
    // 카테고리 버튼 상태 업데이트
    setCategoryBtn(category);
    
    // 카테고리 데이터 가져오기
    getCategoryData(category.key); 
  };
  const [selectedCategory, setSelectedCategory] = useState('a');

  const handleCategory = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(categoryKey); 
    const categoryKey = getCategoryData(categoryKey);
    if (categoryKey) {
      ClickCategory({ key: categoryKey, label: selectedValue });
    } else {
      console.error('카테고리 키를 찾을 수 없습니다.');
    }
  };

  useEffect(() => {
    if (categoryBtn) {
      getCategoryData(categoryBtn.key);
    }
  }, [categoryBtn]);

  return (
    <CategoryContext.Provider value={{ categoryBtn, data, ClickCategory  , handleCategory , selectedCategory , getCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};