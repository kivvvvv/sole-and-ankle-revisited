/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} />
        </DismissButton>
        <Side />
        <Nav>
          <MenuNavLink href="/sale">Sale</MenuNavLink>
          <MenuNavLink href="/new">New&nbsp;Releases</MenuNavLink>
          <MenuNavLink href="/men">Men</MenuNavLink>
          <MenuNavLink href="/women">Women</MenuNavLink>
          <MenuNavLink href="/kids">Kids</MenuNavLink>
          <MenuNavLink href="/collections">Collections</MenuNavLink>
        </Nav>
        <Side>
          <Footer>
            <FooterNavLink href="/terms">Terms and Conditions</FooterNavLink>
            <FooterNavLink href="/privacy">Privacy Policy</FooterNavLink>
            <FooterNavLink href="/contact">Contact Us</FooterNavLink>
          </Footer>
        </Side>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-dialog-overlay);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLinkBase = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MenuNavLink = styled(NavLinkBase)`
  font-size: calc(18 / 16 * 1rem);

  &:active {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  padding-left: 32px;
  padding-bottom: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterNavLink = styled(NavLinkBase)`
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-700);
`;
export default MobileMenu;
