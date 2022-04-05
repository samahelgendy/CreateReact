import React  from "react";
import { Link } from "react-router-dom";
import {NavbarSection , Logo , LogoText , Ul_List , List_Item , Archive , ArchiveLink, Input , Label} from './style'


const Navbar = () =>{
    return(
      <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText> Ultra Profile </LogoText>
                </Logo>
                
                <Input type="checkbox" id="nav" />
                <Label for="nav"></Label>
                
                <Ul_List>

                    <List_Item><Link to="/">Home</Link></List_Item>
                    <List_Item><Archive href="#">Work</Archive></List_Item>
                    <List_Item><Archive href="#">Portfolio</Archive></List_Item>
                    <List_Item><Archive href="#">Resume</Archive></List_Item>
                    <List_Item><Archive href="#">About</Archive></List_Item>
                    <List_Item><Link to="/contact">Contact</Link></List_Item>
                
                </Ul_List>
                
            </div>
            
        </NavbarSection>       
    )
}
export default Navbar;