import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>#skills</SectionTitle>

            <FlexWrapper justify={"flex-end"} >
                <Icon iconId={'dots'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                <Icon iconId={'rect2'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                <Icon iconId={'dots'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                <Icon iconId={'rectangle-24'}  width="86" height="86" viewBox="0 0 86 86"></Icon>
                <Icon iconId={'rectangle-23'} width="52" height="52" viewBox="0 0 52 52"></Icon>
                <div>
                <Skill title={"Languages"} description={"Typescript Lua Python JavaScript"}/>
                </div>
                <div>
                <Skill title={"Databases"} description={"SqLite PostgreSql Mongo"}/>
                <Skill title={"Other"} description={"HTML CSS EJS SCSS REST Jinja"}/>
                </div>
                <div>
                <Skill title={"Tools"} description={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}/>
                <Skill title={"Frameworks"} description={"React Vue Disnake Discord.js Flask Express.js"}/>
                </div>
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  background-color: #4d4d4d;
  min-height: 100vh;
  border: white;
`