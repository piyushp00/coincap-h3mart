import React from "react";
import ccLogo from "../Assets/coincapLogo.svg";
import { ImSearch } from "react-icons/im";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { SiBitcoin } from "react-icons/si";
import { FaExchangeAlt, FaRegNewspaper } from "react-icons/fa";
import { VscMerge } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg mx-auto"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container-fluid  row d-flex justify-content-center">
          <div id="navMenu1" className="col-5">
            <span className="mx-3">Coins</span>
            <span className="mx-3">Exchanges</span>
            <span className="mx-3">Swap</span>
          </div>
          <div id="navMenu2" className="col-5">
            <div id="searchBtn2">
              <ImSearch size="23px" className=" my-auto" />
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center">
            <img src={ccLogo} alt="" height="40" />
          </div>
          <div id="navMenu3" className="col-5  justify-content-end ">
            <ImSearch size="17px" className="mx-4 my-auto" />
            <AiFillSetting size="17px" className="mx-4 my-auto" />
            <button className="btn ms-3">
              <strong>Connect Wallet</strong>
            </button>
          </div>
          <div id="navMenu4" className="col-5 justify-content-end pe-0">
            <a
              class=""
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <AiOutlineMenu
                size="23px"
                className="me-0 my-auto"
                color="black"
              />
            </a>

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="offCanvasBtns">
                    <SiBitcoin
                      alignmentBaseline="center"
                      className="mx-auto"
                      size="30px"
                    />
                    <div className="offCanvasText">Coins</div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="offCanvasBtns">
                    <FaExchangeAlt
                      alignmentBaseline="center"
                      className="mx-auto"
                      size="30px"
                    />
                    <div className="offCanvasText">Exchanges</div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="offCanvasBtns">
                    <VscMerge
                      alignmentBaseline="center"
                      className="mx-auto"
                      size="30px"
                    />
                    <div className="offCanvasText">Swap</div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="offCanvasBtns">
                    <FaRegNewspaper
                      alignmentBaseline="center"
                      className="mx-auto"
                      size="30px"
                    />
                    <div className="offCanvasText">API</div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="offCanvasBtns">
                    <AiFillSetting
                      alignmentBaseline="center"
                      className="mx-auto"
                      size="30px"
                    />
                    <div className="offCanvasText">Settings</div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{ width: "100%" }}
                >
                  <button className="btn ms-3">
                    <strong>Connect Wallet</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
