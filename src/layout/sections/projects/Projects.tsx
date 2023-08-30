import React from 'react';
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import ChertProj from '../../../../src/assets/images/Rectangle 22.png'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Projects = () => {
    return (
        <StyledSProjects>

            <SectionTitle><ColorSpan>#</ColorSpan>projects</SectionTitle>
            <FlexWrapper justify={"space-between"} align={"start"}>
                <StyledDiv>
                    <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                 description={"Minecraft servers hosting "} live={"live<~>"} cashed={""}></ProjectItem>
                </StyledDiv>
                <StyledDiv>
                    <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                 description={"Minecraft servers hosting "} live={"live<~>"} cashed={""}></ProjectItem>
                </StyledDiv>
                <StyledDiv>
                    <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                 description={"Minecraft servers hosting "} live={"live<~>"} cashed={""}></ProjectItem>
                </StyledDiv>
                <StyledDiv>
                    <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                 description={"Minecraft servers hosting "} live={"live<~>"} cashed={""}></ProjectItem>
                </StyledDiv>
            </FlexWrapper>
        </StyledSProjects>
    );
};
const StyledSProjects = styled.section`
  background-color: #606060;
  min-height: 100vh;
  border: white;
  padding: 20px;
  position: relative;
`
const StyledDiv = styled.div`
  margin: 20px;
`
