import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import Quotes from "../../../../assets/images/Quotes.svg";
import {theme} from "../../../../styles/Theme";

export const Citation = () => {
    return (
<FlexWrapper justify={"center"}>
            <QuoteDiv>
                <StyledBox><span>With</span> great power comes great electricity bill</StyledBox>
                <StyledBox2>- Dr. <span>Who</span></StyledBox2>
            </QuoteDiv>
</FlexWrapper>
    );
};


const QuoteDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: max-content;
  align-content: center;
`
const StyledBox = styled.div`
  color: #FFF;
  margin: 0 auto;
  padding: 32px;
  gap: 10px;
  border: 2px solid gray;
  font-family: Fira Code;
  font-size: 24px;
  font-weight: 500;
  position: relative;

  span:first-child {
    &::before {
      position: absolute;
      content: "";
      background-image: url(${Quotes});
      max-width: 25px;
      width: 100%;
      max-height: 20px;
      height: 100%;
      top: -.5em;
      left: 1em;
      background-color: ${theme.colors.primaryBg};
    }
  }
`
const StyledBox2= styled.div`
  color: #FFF;
  max-width: 515px;
  padding: 32px;
  gap: 10px;
  border: 2px solid gray;
  font-family: Fira Code;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: end;
  position: relative;
  span:first-child{
    &::after {
      position: absolute;
      content: "";
      background-image: url(${Quotes});
      max-width: 25px;
      width: 100%;
      max-height: 20px;
      height: 100%;
      top: -.5em;
      right: 1em;
      background-color: ${theme.colors.primaryBg};
    }
  }
`
const AboluteElEnd = styled.div`
  color: #ABB2BF;
  position: absolute;
  left: 10em;
  top: -1em;
  padding: 5px;
  height: 21px;
  background: #282C33;
`
const AboluteElStart = styled.div`
  color: #ABB2BF;
  position: absolute;
  left: 3em;
  top: -1em;
  padding: 5px;
  height: 21px;
  background: #282C33;
`