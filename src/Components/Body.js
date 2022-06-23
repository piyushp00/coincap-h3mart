import React, { useEffect, useState } from "react";
import eth from "../Assets/eth.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/ducks/user";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(dispatch(getUser()), 2000);
  }, [dispatch]);

  const cryptoData = useSelector((state) => state.user.user);
  const [n, setN] = useState(50);
  // console.log(JSON.parse(cryptoData).data);
  console.log(cryptoData);

  return (
    <div>
      <div id="dropdown">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Market Snapshot
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body p-0">
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Market Cap :</div>
                    <div>$2.02T</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Exchange Vol :</div>
                    <div>$94.11B</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Assets :</div>
                    <div>2,296</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Exchanges :</div>
                    <div>73</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Markets :</div>
                    <div>16,307</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>BTC Dom Index :</div>
                    <div>34.0%</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="banner">
        <div id="stats" className="mx-auto ">
          <div id="stat1" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">$2.02T</div>
          </div>
          <div id="stat2" className="mx-auto mt-2">
            <div className="bannerTextH">Exchange Vol</div>
            <div className="bannerTextC">$94.11B</div>
          </div>
          <div id="stat3" className="mx-auto mt-2">
            <div className="bannerTextH">Assets</div>
            <div className="bannerTextC">2,296</div>
          </div>
          <div id="stat4" className="mx-auto mt-2">
            <div className="bannerTextH">Exchanges</div>
            <div className="bannerTextC">73</div>
          </div>
          <div id="stat5" className="mx-auto mt-2">
            <div className="bannerTextH">Markets</div>
            <div className="bannerTextC">16,307</div>
          </div>
          <div id="stat6" className="mx-auto mt-2">
            <div className="bannerTextH">BTC Dom Index</div>
            <div className="bannerTextC">34.0%</div>
          </div>
        </div>
      </div>

      <div id="table" className="wrapper">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" id="rank" style={{ textAlign: "center" }}>
                Rank
              </th>
              <th scope="col" className="ps-2" style={{ textAlign: "left" }}>
                Name
              </th>
              <th scope="col">Price</th>
              <th scope="col" className="hideCol2">
                Market Cap
              </th>
              <th scope="col" className="hideCol1">
                VWAP(24Hrs)
              </th>
              <th scope="col" className="hideCol1">
                Supply
              </th>
              <th scope="col" className="hideCol2">
                Volume(24Hrs)
              </th>
              <th scope="col">Change(24Hrs)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData &&
              cryptoData.data.slice(0, n).map((coin) => (
                <tr>
                  <th
                    scope="row"
                    className="col-1 align-middle"
                    style={{ textAlign: "center" }}
                  >
                    {coin.rank}
                  </th>

                  <td
                    className=" d-flex justify-content-left"
                    style={{ textAlign: "left" }}
                  >
                    <div className="my-auto mx-1">
                      <img
                        className=""
                        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                        style={{ height: "35px" }}
                        alt=""
                      />
                    </div>
                    <div className="my-auto">
                      <div className="coinName">{coin.name}</div>
                      <div className="coinCode">{coin.symbol}</div>
                    </div>
                  </td>
                  <td className="td align-middle">
                    $
                    {coin.priceUsd.split(".")[0] +
                      "." +
                      coin.priceUsd.split(".")[1].slice(0, 2)}
                  </td>
                  <td className="td align-middle hideCol2">
                    $
                    {coin.marketCapUsd
                      .split(".")[0]
                      .slice(0, coin.marketCapUsd.split(".")[0].length - 9)}
                    b
                  </td>
                  <td className="td align-middle hideCol1">
                    $
                    {coin.priceUsd.split(".")[0] +
                      "." +
                      coin.priceUsd.split(".")[1].slice(0, 2)}
                  </td>
                  <td className="td align-middle hideCol1">
                    {coin.supply
                      .split(".")[0]
                      .slice(0, coin.supply.split(".")[0].length - 6)}
                    m
                  </td>
                  <td className="td align-middle hideCol2">
                    {coin.volumeUsd24Hr
                      .split(".")[0]
                      .slice(0, coin.volumeUsd24Hr.split(".")[0].length - 6)}
                    m
                  </td>
                  <td id="percent" className="td align-middle">
                    {coin.changePercent24Hr.split(".")[0] +
                      "." +
                      coin.changePercent24Hr.split(".")[1].slice(0, 2)}
                    %
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-center mt-0 mb-4"
      >
        <button className="btn ms-3" onClick={() => setN(100)}>
          <strong>Load More</strong>
        </button>
      </div>
      <div className="banner"></div>
    </div>
  );
};

export default Body;
