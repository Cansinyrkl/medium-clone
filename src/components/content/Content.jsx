import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import {
  TrendUp,
  TrendContainer,
  FontTrend,
  TrendContentNumber,
  TrendContentContainer,
  TrendContent,
  Parent,
  Arrangement,
  TrendImage,
  TrendContentUser,
  TrendContentHeader,
  TrendContentFlex,
  Dates,
  TopTrend,
} from "./Content";
import Logo from "./attempt/01.jpg";

const Content = () => {
  let today = new Date();

  let date =
    today.getDate() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  return (
    <>
      <TrendContainer>
        <FontTrend>
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </FontTrend>
        <TrendUp>TRENDING ON MEDIUM</TrendUp>
      </TrendContainer>
      {/* ---------------------------------------------- */}
      <TrendContentContainer>
        <Parent>
          <Arrangement>
            <TrendContentNumber>01</TrendContentNumber>
            <TrendContent>
              <TopTrend>
                <TrendImage src={Logo} />

                <TrendContentUser>Arthur Hayes İn Entrepure</TrendContentUser>
              </TopTrend>
              <TrendContentFlex>
                <TrendContentHeader>Speechlees</TrendContentHeader>
                <Dates>{date}</Dates>
              </TrendContentFlex>
            </TrendContent>
          </Arrangement>
          <Arrangement>
            <TrendContentNumber>02</TrendContentNumber>
            <TrendContent>
              <TopTrend>
                <TrendImage src={Logo} />
                <TrendContentUser>Dave Troy</TrendContentUser>
              </TopTrend>
              <TrendContentFlex>
                <TrendContentHeader>
                  No,Elon And Jack are not "competitors." They're collaborating
                </TrendContentHeader>
                <Dates>{date}</Dates>
              </TrendContentFlex>
            </TrendContent>
          </Arrangement>
          <Arrangement>
            <TrendContentNumber>03</TrendContentNumber>
            <TrendContent>
              <TopTrend>
                <TrendImage src={Logo} />
                <TrendContentUser>
                  Netflix Technolgy Blog in Netflix
                </TrendContentUser>
              </TopTrend>
              <TrendContentFlex>
                <TrendContentHeader>
                  Seeing through hardware counters:a
                </TrendContentHeader>
                <Dates>{date}</Dates>
              </TrendContentFlex>
            </TrendContent>
          </Arrangement>
          <Arrangement>
            <TrendContentNumber>04</TrendContentNumber>
            <TrendContent>
              <TopTrend>
                <TrendImage src={Logo} />
                <TrendContentUser>
                  Benneett Garner in Devoloper
                </TrendContentUser>
              </TopTrend>
              <TrendContentFlex>
                <TrendContentHeader>
                  Elon Musk just force-ranked Twitter engineers & fired the
                  bottom
                </TrendContentHeader>
                <Dates>{date}</Dates>
              </TrendContentFlex>
            </TrendContent>
          </Arrangement>
          <Arrangement>
            <TrendContentNumber>05</TrendContentNumber>
            <TrendContent>
              <TopTrend>
                <TrendImage src={Logo} />
                <TrendContentUser>Andre Cronje</TrendContentUser>
              </TopTrend>
              <TrendContentFlex>
                <TrendContentHeader>Learn from my mistakes</TrendContentHeader>
                <Dates>{date}</Dates>
              </TrendContentFlex>
            </TrendContent>
          </Arrangement>
          <Arrangement>
            <TrendContentNumber>06</TrendContentNumber>
            <TrendContent>
              <TopTrend>
                <TrendImage src={Logo} />
                <TrendContentUser>
                  Natassha Selvarah in Towards Data
                </TrendContentUser>
              </TopTrend>
              <TrendContentFlex>
                <TrendContentHeader>
                  Meet Julia Future of Data Science
                </TrendContentHeader>
                <Dates>{date}</Dates>
              </TrendContentFlex>
            </TrendContent>
          </Arrangement>
        </Parent>
      </TrendContentContainer>
      <hr />
    </>
  );
};

export default Content;
