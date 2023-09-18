import React from 'react';
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import ChertProj from '../../../../src/assets/images/Rectangle 22.png'
import ProtectX from '../../../../src/assets/images/Rectangle 23.png'
import Kahoot from '../../../../src/assets/images/Rectangle 24.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledSection} from "../../../components/StyledSection";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (

        <StyledSection id={"works"}>
            <Container>
                <FlexWrapper direction={"column"}>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <FlexWrapper gap={"16px"} align={"center"} wrap={"no-wrap"}
                                     maxWidth={"100vw"}><SectionTitle><ColorSpan>#</ColorSpan>projects</SectionTitle><Icon
                            iconId={"line"} width="511" height="2" viewBox="0 0 511 2"/></FlexWrapper>
                        <A href={"#"}><Span>View all ~&gt;</Span></A>
                    </FlexWrapper>
                    <FlexWrapper>
                        <FlexWrapper wrap="wrap" gap={"16px;"}>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                            <ProjectItem imgSrc={ProtectX}
                                         skills={"React Express Discord.js Node.js HTML CSS Python Flask"}
                                         title={"ProtextX"}
                                         description={"Discord anti-crash bot "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                            <ProjectItem imgSrc={Kahoot} skills={"CSS Express Node.js"} title={"Kahoot Answers Viewer"}
                                         description={"Get answers to your kahoot quiz "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>

    );
};

const Span = styled.span`
  color: white;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const A = styled.a`
  text-decoration: none;
`
