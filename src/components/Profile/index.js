import React  from "react";
import './style.css'
import { ProfileSkills, Profile, ProfileList, ProfileItem, Span, SpanWeb, Skills, SkillsDesc, SkillsBar, Title, Perc, ProfileTitle, SkillsTitle, ProfileSpan, SkillsSpan } from './style';

const Porfile= () =>{
    return(
        <ProfileSkills>
            <div className="container">
                <Profile>
                    <SkillsTitle><ProfileSpan>My </ProfileSpan>Profile</SkillsTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem >
                            <Span>Website</Span>
                            <SpanWeb className="web">www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profile>
                
                <Skills>
                    <ProfileTitle>Some <SkillsSpan>skills</SkillsSpan></ProfileTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBar>
                        <Title>Bootstrap</Title>
                        <Perc>100%</Perc>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <Title>CSS3</Title>
                        <Perc>90%</Perc>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </SkillsBar>
                    
                    <SkillsBar>
                        <Title>JavaScript</Title>
                        <Perc>80%</Perc>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </SkillsBar>
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}
export default Porfile;