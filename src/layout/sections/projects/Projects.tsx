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
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";




export const Projects = () => {
    return (

        <StyledSection id={"works"}>
            <Container>
                <FlexWrapper direction={"column"}>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        {/*<FlexWrapper gap={"16px"} align={"center"} wrap={"no-wrap"} maxWidth={"100vw"} justify={"space-around"}>*/}
                            <SectionTitle mwidth={"100%"}>
                                <ColorSpan>#</ColorSpan><span>projects</span>
                            </SectionTitle>
                            <A href={"#"}><Span>View all ~&gt;</Span></A>
                        {/*</FlexWrapper>*/}
                    </FlexWrapper>
                    <FlexWrapper marginTop={"50px;"}>
                        <FlexWrapper wrap="wrap" gap={"16px;"}>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                            <ProjectItem imgSrc={ProtectX}
                                         skills={"React Express Discord.js Node.js HTML CSS Python Flask"}
                                         title={"ProtectX"}
                                         description={"Discord anti-crash bot"} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                            <ProjectItem imgSrc={Kahoot} skills={"CSS Express Node.js"} title={"Kahoot Answers Viewer"}
                                         description={"Get answers to your kahoot quiz"} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>

    );
};

const Span = styled.div`
  color: white;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const A = styled.a`
  text-decoration: none;
  background-color: ${theme.colors.background};
  z-index: 1;
  padding-left: 10px;
  padding-right: 10px;
`
