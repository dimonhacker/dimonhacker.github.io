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
                            <SectionTitle mwidth={"239px"}><ColorSpan>#</ColorSpan>skills</SectionTitle>
                        </FlexWrapper>
                        <FlexWrapper marginTop={"45px;"}>
                            <StyledGrid>
                                <FlexWrapper direction={"column"}>
                                    <FlexWrapper justify={"space-around"}>
                                        <Icon iconId={'dots'} width="200" height="200" viewBox="0 0 200 200"/>
                                        <Icon iconId={'rectangle-24'} width="86" height="86" viewBox="0 0 86 86"/>
                                    </FlexWrapper>
                                    <FlexWrapper justify={"space-around"}>
                                        <Icon iconId={'rect2'} width="156" height="156" viewBox="0 0 156 156"/>
                                        <Icon iconId={'dots'} width="86" height="86" viewBox="0 0 86 86"/>
                                        <Icon iconId={'rectangle-23'} width="52" height="52" viewBox="0 0 52 52"/>
                                    </FlexWrapper>
                                </FlexWrapper>
                                <StyledGridSmall>
                                    <FlexWrapper direction={"column"}><Skill class={"grid-item"} title={"Languages"}
                                                        description={"Typescript Lua Python JavaScript"}/></FlexWrapper>
                                    <FlexWrapper direction={"column"} gap={"16px"}> <Skill class={"grid-item"} title={"Databases"}
                                                         description={"SqLite PostgreSql Mongo"}/><Skill
                                        class={"grid-item"} title={"Other"}
                                        description={"HTML CSS EJS SCSS REST Jinja"}/></FlexWrapper>
                                    <FlexWrapper gap={"16px"} direction={"column"}><Skill class={"grid-item"} title={"Tools"}
                                                        description={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}/>

                                        <Skill class={"grid-item"} title={"Frameworks"}
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
const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

const StyledGridSmall = styled.div`
  display: grid;
  gap: 1em;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);

  .grid-item:first-child {
    grid-area: 1/1/1/1
  }

  .grid-item:nth-child(2) {
    grid-area: 1/2/1/2
  }

  .grid-item:nth-child(3) {
    grid-area: 1/3/1/3
  }

`