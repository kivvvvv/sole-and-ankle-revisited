import React from "react";
import styled from "styled-components/macro";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <HelpLink href="/help">Help</HelpLink>
      <HeaderButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </HeaderButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--color-gray-300);
  background-color: var(--color-gray-900);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media (${({ theme }) => theme.queries.tabletAndDown}) {
    height: 4px;
  }
`;

const MarketingMessage = styled.span`
  color: var(--color-white);
  margin-right: auto;

  @media (${({ theme }) => theme.queries.tabletAndDown}) {
    display: none;
  }
`;

const SearchInputWrapper = styled.div`
  @media (${({ theme }) => theme.queries.tabletAndDown}) {
    display: none;
  }
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }

  @media (${({ theme }) => theme.queries.tabletAndDown}) {
    display: none;
  }
`;

const HeaderButton = styled(UnstyledButton)`
  @media (${({ theme }) => theme.queries.tabletAndDown}) {
    display: none;
  }
`;

export default SuperHeader;
