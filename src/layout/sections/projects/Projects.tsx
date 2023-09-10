import React from 'react';
import styled from "styled-components";
import {ProjectItem} from "./projectItem/ProjectItem";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import ChertProj from '../../../../src/assets/images/Rectangle 22.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledSection2} from "../../../components/StyledSection2";
import {Icon} from "../../../components/icon/Icon";

export const Projects = () => {
    return (

        <StyledSection2 id={"works"} max-width={"1366px;"}>
            <FlexWrapper direction={"column"} >
                <FlexWrapper justify={"start"} align={"center"}>
                    <SectionTitle><ColorSpan>#</ColorSpan>projects</SectionTitle>
                    <Icon iconId={"line"} width="511" height="2" viewBox="0 0 511 2"/>
                </FlexWrapper>
                <FlexWrapper>
                    <FlexWrapper wrap="wrap" gap={"16px;"}>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                            <ProjectItem imgSrc={ChertProj} skills={"HTML CSS Python Flask"} title={"ChertNodes"}
                                         description={"Minecraft servers hosting "} live={"Live<~>"}
                                         cashed={""}></ProjectItem>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSection2>

    );
};


