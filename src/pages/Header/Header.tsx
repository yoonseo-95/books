import React, { useState } from 'react'
import logo from '../../assets/image/books-logo.png';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { FiHeart ,FiEdit3,FiShoppingBag  } from "react-icons/fi";
import { useSelector } from '../../redux/hooks';

interface BookmarkDivProps {
  $show: boolean;
}
interface CartProps {
  $show: boolean;
}

export default function Header() {

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchValue.trim())}`);
    }
  }
  const bookmark = useSelector((state) => state.bookmark.bookmark);
  const cart = useSelector((state) => state.cart.cart);
  const review = useSelector((state) => state.review.review);

  return (
    <HeaderWrap>
      <HeaderWrapper>
        <HeaderLogo>
          <HeaderLink to="/" onClick={() => setSearchValue("")}>
            <span>books</span>
          </HeaderLink>
        </HeaderLogo>
        <HeaderSearchForm onSubmit={handleSearchSubmit}>
          <HeaderSearch type="search" id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="책을 검색하세요"/>
        </HeaderSearchForm>
        <HeaderUl>
          <HeaderLI>
            <BookmarkDiv $show={bookmark.length > 0}>{bookmark.length}</BookmarkDiv>
            <HeaderIcons to="/bookmark"><FiHeart  aria-label="북마크 링크"/></HeaderIcons>
          </HeaderLI>
          <HeaderLI>
            <CartSpan $show={cart.length > 0}>{cart.length}</CartSpan>
            <HeaderIcons to="/cart"><FiShoppingBag aria-label="장바구니 링크"/></HeaderIcons>
          </HeaderLI>
          <HeaderLI>
            <ReviewSpan $show={review.length > 0}>{review.length}</ReviewSpan>
            <HeaderIcons to="/review"><FiEdit3 aria-label="리뷰 링크"/></HeaderIcons>
          </HeaderLI>
        </HeaderUl>
      </HeaderWrapper>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
width: 100%;
background: #f8f3ed;
display: flex;
align-items: center;
justify-content: center;
transition: 0.5s;

@media screen and (max-width: 1350px){
  padding: 0 20px;
}

`
const HeaderWrapper = styled.div`
height: 146px;
max-width: 1380px;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 768px){
  height: 100px;
}
`
const HeaderLogo = styled.h1`
font-size: 1px;
display: block;
width: 137px;
text-indent: -9999px;
@media screen and (max-width: 768px){
  width: 7rem;
}
@media screen and (max-width: 320px){
  width: 6.3rem;
}
`
const HeaderLink = styled(Link)`
display: block; 
width: 140px;
height: 32px;
background: url(${logo}) center center /95% no-repeat;

@media screen and (max-width: 768px){
  width: 7rem;
}
@media screen and (max-width: 320px){
  width: 6.3rem;
}
`
const HeaderUl = styled.ul`
display: flex;
justify-content: flex-end;
gap: 12px;
width: 144px;
`
const HeaderLI = styled.li`
width: 40px;
height: 40px;
border-radius: 100%;
transition: 0.5s;
overflow-y: hidden;
position: relative;
  &:hover {
    border-radius: 100%;
    background: rgba(255,98,98,0.1);
  }
`
const HeaderIcons = styled(Link)`
font-size: 23px;
color: #312424;
line-height: 50px;
display: block;
width: 100;
`
const HeaderSearchForm =styled.form`
width: 40%;

@media screen and (max-width: 600px){
position: absolute;
top: 88px;
left: 20px;
width: 92%;
}
@media screen and (max-width: 320px){
  position: absolute;
  top: 88px;
  left: 20px;
  width: 85%;
  z-index: 5555;
}
`
const HeaderSearch = styled.input`
width: 100%;
height: 50px;
border-radius: 100px;
border: 1.5px solid #d7cec3;
padding: 20px;
box-sizing:border-box;
font-size: 17px;
outline: none;

&::placeholder {
  color: #c1b8ad;
}

@media screen and (max-width: 768px){
  height: 30px;
  padding: 17px;
  font-size: 16px;
}
`
const BookmarkDiv = styled.div<BookmarkDivProps>`
width: 12px;
height: 12px;
border-radius: 100%;
background: #ff1818;
position: absolute;
top: 7px;
left: 4px;
overflow: hidden;
color: #fff;
text-align:center;
font-size: 9px;
line-height: 13px;
display: ${props => props.$show ? 'block' : 'none'};
`
const CartSpan = styled.span<CartProps>`
width: 14px;
height: 14px;
border-radius: 100%;
background: #ff1818;
position: absolute;
top: 7px;
left: 4px;
overflow: hidden;
color: #fff;
text-align:center;
font-size: 9px;
line-height: 13px;
display: ${props => props.$show ? 'block' : 'none'};
`
const ReviewSpan = styled.span<CartProps>`
width: 14px;
height: 14px;
border-radius: 100%;
background: #ff1818;
position: absolute;
top: 7px;
left: 4px;
overflow: hidden;
color: #fff;
text-align:center;
font-size: 9px;
line-height: 13px;
display: ${props => props.$show ? 'block' : 'none'};
`