import React from 'react';
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {ColorSpan} from "../../../components/ColorSpan";
import {StyledSection} from "../../../components/StyledSection";
import {Container} from "../../../components/Container";
import styled from "styled-components";


export const Skills = () => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <FlexWrapper justify={"start"} align={"center"} wrap={"no-wrap"}>
                            <SectionTitle mwidth={"160px"}><ColorSpan>#</ColorSpan>skills</SectionTitle>
                        </FlexWrapper>
                        <FlexWrapper marginTop={"45px;"} className={"wrapper"}>
                            <StyledGrid>
                                <IconWrapper2 className={"fon"}>
                                    <IconWrapper_4>
                                    <Icon iconId={'dots'} width="64" height="64" viewBox="0 0 86 86"/>
                                    </IconWrapper_4>
                                    <IconWrapper_5>
                                    <Icon iconId={'rectangle-24'} width="86" height="86" viewBox="0 0 86 86"/>
                                    </IconWrapper_5>
                                    <IconWrapper_1><Icon iconId={'rect2'} width="113" height="113"
                                                         viewBox="0 0 156 156"/></IconWrapper_1>
                                    <IconWrapper_2><Icon iconId={'dots'} width="63" height="63"
                                                         viewBox="0 0 86 86"/></IconWrapper_2>

                                    <IconWrapper_3><Icon iconId={'rectangle-23'} width="52" height="52"
                                                         viewBox="0 0 52 52"/></IconWrapper_3>
                                </IconWrapper2>
                                <StyledGridSmall className={"skills"}>
                                    <FlexWrapper className={"grid-item"} direction={"column"}><Skill title={"Languages"}
                                                                                                     description={"Typescript Lua Python JavaScript"}/></FlexWrapper>
                                    <FlexWrapper className={"grid-item"} direction={"column"} gap={"16px"}> <Skill
                                        title={"Databases"}
                                        description={"SqLite PostgreSql Mongo"}/><Skill
                                        title={"Other"}
                                        description={"HTML CSS EJS SCSS REST Jinja"}/></FlexWrapper>
                                    <FlexWrapper className={"grid-item"} gap={"16px"} direction={"column"}><Skill
                                        title={"Tools"}
                                        description={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}/>

                                        <Skill title={"Frameworks"}
                                               description={"React Vue Disnake Discord.js Flask Express.js"}/></FlexWrapper>

                                </StyledGridSmall>
                            </StyledGrid>


                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const IconWrapper2 = styled.div`
  position: relative;
`
const IconWrapper_1 = styled.div`
  position: absolute;
  top: 197px;
  left: 47px;
`
const IconWrapper_2 = styled.div`
  position: absolute;
  top: 171px;
  left: 209px;
`
const IconWrapper_3 = styled.div`
  position: absolute;
  top: 221px;
  left: 329px;
`
const IconWrapper_4 = styled.div`
  position: absolute;
  top: 66px;
  left: 32px;
`
const IconWrapper_5 = styled.div`
  position: absolute;
  top: 28px;
  left: 259px;
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  .skills:first-child {
    grid-area: 1/2/1/2;
  }

  @media screen and (max-width: 1023px) {
    .skills:nth-child(2) {
      grid-area: 1/2/1/2;
    }

    .fon {
      display: none;
    }

  }
  @media screen and (max-width: 609px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

`

const StyledGridSmall = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;

  .grid-item:first-child {
    grid-area: 1/1/1/1
  }

  .grid-item:nth-child(2) {
    grid-area: 1/2/1/2
  }

  .grid-item:nth-child(3) {
    grid-area: 1/3/1/3
  }

  @media screen and (max-width: 1023px) {
    .grid-item {
      align-items: center;
    }
  }

  @media screen and (max-width: 609px) {
    gap: 20px;
    .grid-item:first-child {
      grid-area: 1/2/1/2
    }

    .grid-item:nth-child(2) {
      grid-area: 2/2/2/2
    }

    .grid-item:nth-child(3) {
      grid-area: 3/2/3/2
    }
  }


`