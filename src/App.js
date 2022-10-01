
import styled from "styled-components";

import { Cookielist } from "cookielist";
import { Cookieclicker } from "cookieclicker";
import { Cookiecounter } from "cookiecounter";

const Styledcookies = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  align-items: center;
`;

export const App = () => {
  return (
  <>
      <Styledcookies>
        Ellas Cookies
        <Cookiecounter cookiecounter={Cookiecounter} />
        <Cookieclicker cookieclicker={Cookieclicker} />
        <Cookielist cookielist={Cookielist} />
      </Styledcookies>
    </>
  );

}
