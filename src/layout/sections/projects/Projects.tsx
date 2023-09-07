import React from 'react';
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import ChertProj from '../../../../src/assets/images/Rectangle 22.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledSection2} from "../../../components/StyledSection2";

export const Projects = () => {
    return (

        <StyledSection2 id={"works"}>
            <FlexWrapper direction={"column"} align={"center"} >
                <SectionTitle><ColorSpan>#</ColorSpan>projects</SectionTitle>
                <FlexWrapper>
                    <FlexWrapper wrap="wrap">
                        <StyledDiv>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                        </StyledDiv>
                        <StyledDiv>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                        </StyledDiv>
                        <StyledDiv>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                        </StyledDiv>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSection2>

    );
};

const StyledDiv = styled.div`
  margin: 20px;
`
