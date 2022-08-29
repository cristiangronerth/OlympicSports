import React from 'react'

import "./AddToCartButton.css"
import topArrow from "../../../assets/icons/a-top.svg";
import bottomArrow from "../../../assets/icons/a-bottom.svg";

import { Link } from "@chakra-ui/react";

function AddToCartButton2({addToCartHandler}) {
  return (
    <div className="product-aside">
            <div className="product-aside__wrap">
              <form id="product-form">
                <div className="product-aside__option-list">
                  <div className="product-aside__option">
                    <div className="product-aside__button">
                      <select required className="product-aside__select">
                        <option select="true" value>Select Color</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                      </select>
                    </div>
                    <div className="select-arrows">
                      <img src={topArrow} alt='' className="select-form-arrow-top"/>
                      <img src={bottomArrow} alt='' className="select-form-arrow-top"/>
                    </div>
                  </div>
                  <div className="product-aside__option">
                    <div className="product-aside__button">
                      <select required className="product-aside__select">
                        <option select="true" value>Select Size</option>
                        <option value="s36">EU 36 | US 3 | UK 2</option>
                        <option value="s37">EU 37 | US 4 | UK 3</option>
                        <option value="s38" disabled>EU 38 | US 5 | UK 4</option>
                        <option value="s39">EU 39 | US 6 | UK 5</option>
                        <option value="s40">EU 40 | US 7 | UK 6</option>
                        <option value="s41">EU 41 | US 8 | UK 7</option>
                        <option value="s42" disabled>EU 42 | US 9 | UK 8</option>
                        <option value="s43">EU 43 | US 10 | UK 9</option>
                        <option value="s44">EU 44 | US 11 | UK 10</option>
                        <option value="s45" disabled>EU 45 | US 12 | UK 11</option>
                      </select>
                    </div>
                    <div className="select-arrows">
                      <img src={topArrow} alt='' className="select-form-arrow-top"/>
                      <img src={bottomArrow} alt='' className="select-form-arrow-top"/>
                    </div>
                  </div>
                </div>
                <Link onClick={addToCartHandler}><span className='product-aside__action-submit'>Add To Cart</span></Link>
              </form>
            </div>
          </div>
  )
}

export default AddToCartButton2