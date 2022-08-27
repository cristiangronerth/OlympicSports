import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import {
  StyledProductTitle,
  StyledProductDetails,
  SytledProductPriceInfo,
  StyledProductImage,
  StyledProductDescription,
  StyledProductOtherInfo,
  StyledProductShippingInfo,
  StyledProductOtherInfoTitle,
  StyledAddToCartButton,
} from "./styledComponents";

function ProductDetails(props) {
  const product = props.data;

  const addToCartHandler = (event) => {
    event.preventDefault();
  };

  const initialTitleState = {
    overflow: "hidden",
    minHeight: "10em",
    position: "relative",
  };

  const initialTextState = {
    position: "absolute",
    bottom: "-100px",
    left: "0px",
    minHeight: "inherit",
  };

  return (
    <Wrapper>
      <StyledProductDetails>
        <section>
          <StyledProductTitle initial={initialTitleState}>
            <motion.div
              initial={initialTextState}
              transition={{ duration: 0.6, ease: "easeOut" }}
              animate={{ bottom: "0px" }}
            >
              <h4>category</h4>
              <h1>name</h1>
            </motion.div>
          </StyledProductTitle>
          <SytledProductPriceInfo>
            <p>$ price usd</p>
            <h3>$ finalprice USD</h3>
          </SytledProductPriceInfo>
          <StyledProductImage>
            <motion.div
              initial={{ y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              animate={{ y: 0 }}
            >
              {/* <img
                src={product.images.sideView}
                alt={`${product.name} side view`}
              /> */}
            </motion.div>
            <div>
              <p>side</p>
            </div>
          </StyledProductImage>
          <StyledProductDescription>
            description
          </StyledProductDescription>
        </section>
        <StyledProductOtherInfo>
          <StyledProductOtherInfoTitle>
           asd
          </StyledProductOtherInfoTitle>
          <StyledProductImage>
            <div>
              {/* <img
                src={product.images.frontView}
                alt={`${product.name} front view`}
              /> */}
            </div>
            <div>
              <p>view</p>
              <p>(01)</p>
            </div>
          </StyledProductImage>
          <StyledProductImage>
            <div>
              {/* <img
                src={product.images.backView}
                alt={`${product.name} back view`}
              /> */}
            </div>
            <div>
              <p>view</p>
              <p>(01)</p>
            </div>
          </StyledProductImage>
          <StyledProductShippingInfo>
            <p>aaaa</p>
            <p>bbb</p>
          </StyledProductShippingInfo>
        </StyledProductOtherInfo>
        <StyledAddToCartButton
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#" onClick={addToCartHandler}>
            Add to cart
          </a>
        </StyledAddToCartButton>
        <hr />
      </StyledProductDetails>
    </Wrapper>
  );
}

export default ProductDetails;
