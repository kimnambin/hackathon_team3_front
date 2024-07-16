//커뮤니티 부분 공통 props들

import React, { createContext, useState } from 'react';

//이름을 CategoryContext로 사용
export const CategoryContext = createContext();

export const category = ['일반 고민', '진료 / 취업', '학교', '직장', '대인 관계', '썸 / 연애'];
export const category2 = ['결혼 / 육아', '이별 / 이혼', '가족', '성 생활', '외모', '금전', 'LGBT'];

//제공할 내용을 CategoryProvider 이걸로
export const CategoryProvider = ({ children }) => {
  const [categoryBtn, setCategoryBtn] = useState('일반 고민');

  const ClickCategory = (category) => {
    setCategoryBtn(category);
  };

  return (
    <CategoryContext.Provider value={{ categoryBtn, ClickCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
