import React from 'react';
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import ChertProj from '../../../../src/assets/images/Rectangle 22.png'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Projects = () => {
    return (
        <FlexWrapper direction={"column"} align={"center"}>
            <StyledSProjects>
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

            </StyledSProjects>
        </FlexWrapper>
    );
};
const StyledSProjects = styled.section`
  background-color: #282C33;
  min-height: 100vh;
  border: white;
  padding: 20px;
`
const StyledDiv = styled.div`
  margin: 20px;
`
