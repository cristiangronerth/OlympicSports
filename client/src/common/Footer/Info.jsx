import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <InfoSection>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <a href="/faq">Faq</a>
          </li>
          <li>
            <a href="/returns">Returns</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <SecondaryLink>
        <a href="/credits">Credits</a>
      </SecondaryLink>
    </InfoSection>
  );
}

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-top: 0.4em;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #141414;
    font-size: 1.3rem;
  }

  div:last-child {
    margin-top: 5em;
  }
`;

const SecondaryLink = styled.div`
  a {
    font-size: 0.9rem;
  }
`;

export default Info;
