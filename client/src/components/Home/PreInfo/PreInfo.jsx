import React from "react";
import styled from "styled-components";

function PreInfo() {
  return (
    <Info>
      <p>
        <span className="firstSpan">Who we are</span>
        An independent <span className="secondSpan">brand</span> of urban trekking shoes and
        accessories that comes from a convergence of arts and personalities.
      </p>
    </Info>
  );
}

const Info = styled.section`
  margin-top: 3em;
  margin-bottom: 3em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  max-width: 1000px;

  .firstSpan {
    font-size: clamp(0.8rem, 3vw, 1.2rem);
    text-transform: uppercase;
    text-decoration: underline;
    margin-right: 2em;
  }
  .secondSpan {
    text-decoration: underline;
  }
  p {
    font-size: 3.2rem;
    line-height: 1.1em;
    letter-spacing: 0px;
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default PreInfo;
