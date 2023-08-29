import React from 'react';
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import ChertProj from '../../../../src/assets/images/Rectangle 22.png'

export const Projects = () => {
    return (
        <StyledSProjects>
            <SectionTitle><ColorSpan>#</ColorSpan>projects</SectionTitle>
            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"} description={"Minecraft servers hosting "} live={"live<~>"} cashed={""}></ProjectItem>
        </StyledSProjects>
    );
};
const StyledSProjects = styled.section`
  background-color: #606060;
  min-height: 100vh;
  border: white;
`
