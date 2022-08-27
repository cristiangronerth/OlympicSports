import { motion } from "framer-motion";
import styled from "styled-components";

const StyledWrapper = styled(motion.div)`
  padding-left: 1.5em;
  padding-right: 1.5em;
  margin-top: 8em;
  margin-bottom: 8em;
  max-width: 768px;

  @media (min-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
function Wrapper(props) {
  return (
    <StyledWrapper
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut" }}
    >
      {props.children}
    </StyledWrapper>
  );
}

export default Wrapper;
