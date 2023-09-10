import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Citation = () => {
    return (

        <FlexWrapper direction={"column"} align={"end"}>
            <FlexWrapper>
                <AboluteElStart> <Icon iconId={"quotes"} width="26" height="21"
                                       viewBox="0 0 26 21"/></AboluteElStart>
                <StyledBox>With great power comes great electricity bill</StyledBox>
            </FlexWrapper>
            <FlexWrapper >
                <AboluteElEnd> <Icon iconId={"quotes"} width="26" height="21"
                                     viewBox="0 0 26 21"/></AboluteElEnd>
                <StyledBox2>Dr. Who</StyledBox2>
            </FlexWrapper>
        </FlexWrapper>
    );
};


const StyledBox = styled.div`
  color: #FFF;
  max-width: 712px;
  margin: 0 auto;
  padding: 32px;
  gap: 10px;
  border: 2px solid gray;
  font-family: Fira Code;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const StyledBox2= styled.div`
  color: #FFF;
  max-width: 712px;
  margin: 0 auto;
  padding: 32px;
  gap: 10px;
  border: 2px solid gray;
  font-family: Fira Code;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: end;
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