import React from 'react';
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {ColorSpan} from "../../../components/ColorSpan";
import {StyledSection} from "../../../components/StyledSection";
import {Container} from "../../../components/Container";

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
                            <FlexWrapper>
                                <div>
                                    <Skill title={"Languages"} description={"Typescript Lua Python JavaScript"}/>
                                </div>
                                <div>
                                    <Skill title={"Databases"} description={"SqLite PostgreSql Mongo"}/>
                                    <Skill title={"Other"} description={"HTML CSS EJS SCSS REST Jinja"}/>
                                </div>
                                <div>
                                    <Skill title={"Tools"}
                                           description={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}/>
                                    <Skill title={"Frameworks"}
                                           description={"React Vue Disnake Discord.js Flask Express.js"}/>
                                </div>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};