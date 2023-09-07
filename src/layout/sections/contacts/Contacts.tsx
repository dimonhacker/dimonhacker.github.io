import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts id={"contacts"}>
            <FlexWrapper>
                <SectionTitle><ColorSpan>#</ColorSpan>contacts</SectionTitle>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: #4d4d4d;
  min-height: 100vh;
  border: white;
`
