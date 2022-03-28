import React from 'react'
import loanlyLogo from '../../images/loanlyLogo.svg';
import sidebarIllustration from '../../images/sidebar illustration.svg';
import  {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
    <SidebarWrapper>
        <img src={sidebarIllustration}  width="200px" height="auto"/>
        <img src={loanlyLogo} width="150px" height="auto"/> 
        <SidebarMenu>
            <SidebarLink to="/" onClick={toggle} >Strona główna </SidebarLink>
            <SidebarLink to="/kalkulator" onClick={toggle} >Kalkulator</SidebarLink>
            <SidebarLink to="/jak-obliczamy-rate" onClick={toggle}>Jak obliczamy ratę?</SidebarLink>
            <SidebarLink to="/przydatne-pojecia" onClick={toggle}>Przydatne pojęcia</SidebarLink>
        </SidebarMenu>
    </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar;