/* eslint-disable no-unused-vars */
import { CompassOutlined } from "@ant-design/icons";
import { Space, Typography, Row, Col } from "antd";
import { number } from "prop-types";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import { isMobile, osName } from "react-device-detect";
import { iowaData, iowaGameData, iowaPractceData } from "../../data/iowa";
import { FirebaseContext } from "../../firebase";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../CustomButton";
import { PokerDeck } from "../PokerCard";
import { Progress } from "../Progress";
import { StroopCard } from "../StroopCard";
import styles from "./style.module.css";

export interface PokerCardsGroupProps {
  onEnd: Function;
  practice?: boolean;
}
export const PokerCardsGroup: React.FC<PokerCardsGroupProps> = ({
  onEnd,
  practice = false,
}) => {
  const {
    currentText,
    loanText,
    won,
    lost,
    initialLoan,
    finalLimit,
    lastPage,
    practiceLastPage,
  } = iowaData;
  const { cardsData, trialsCount } = practice ? iowaPractceData : iowaGameData;
  const { width } = useWindowDimensions();
  const [currentCardsIdx, setCurrentCardsIdx] = useState<number>(0);
  const [freeze, setFreeze] = useState(false);
  const [timer, setTimer] = useState(0);
  const [end, setEnd] = useState(false);
  const [recentResult, setRecentResult] = useState<{
    won: number;
    lost: number;
  }>({ won: 0, lost: 0 });
  const fixedPercent = (initialLoan * 100) / finalLimit;
  const [amount, setAmount] = useState(initialLoan);
  const [recentDeck, setRecentDeck] = useState("");
  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();

  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handelDeckClick = (deckId: string) => {
    if (currentCardsIdx + 1 <= trialsCount) {
      firestore
        ?.collection("Games")
        .doc("IOWA")
        .collection(sessionStorage.getItem("uuid")!)
        .doc((currentCardsIdx + 1).toString())
        .set({
          subjectid: sessionStorage.getItem("uuid"),
          device: isMobile ? "Mobile" : "Not Mobile",
          starttime: startTime,
          trialnumber: (currentCardsIdx + 1).toString(),
          chosenDeck: recentDeck,
          win: cardsData[deckId][currentCardsIdx].won,
          lose: cardsData[deckId][currentCardsIdx].lost,
          net:
            cardsData[deckId][currentCardsIdx].won -
            cardsData[deckId][currentCardsIdx].lost,
          total:
            cardsData[deckId][currentCardsIdx].won -
            cardsData[deckId][currentCardsIdx].lost +
            amount,
          endtime: Date.now(),
          osname: osName,
        })
        .then(() => {
          // console.log("Document written");
        })
        .catch((error) => {
          // console.error("Error adding document: ", error);
        });
    }
    if (currentCardsIdx + 1 < trialsCount) {
      setRecentDeck(deckId);
      setAmount(
        cardsData[deckId][currentCardsIdx].won -
          cardsData[deckId][currentCardsIdx].lost +
          amount
      );
      setCurrentCardsIdx(currentCardsIdx + 1);
      setRecentResult(cardsData[deckId][currentCardsIdx]);
    } else {
      setEnd(true);
    }
  };

  // useEffect(() => {
  //   if (currentCardsIdx > 0) {
  //     setTimeout(() => setTimer(timer + 1), 1);
  //   }
  // });

  const endTransition = useTransition(end, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 0,
  });

  return (
    <div className={styles.groupContainer}>
      <div className={styles.progressBars}>
        <Progress
          percent={fixedPercent}
          strokeColor="green"
          title={`${loanText} ${initialLoan.toString()}`}
          size="default"
        />
        <Progress
          percent={(amount * 100) / finalLimit}
          strokeColor={
            fixedPercent > (amount * 100) / finalLimit ? "red" : "green"
          }
          title={`${currentText} ${amount.toString()}`}
          size="default"
        />
      </div>
      {/* <div className={styles.result}>
        <StroopCard text={`You Won : ${cardsData[deckId][currentCardsIdx].won} Rs`} />
        <StroopCard text={`You Lost : ${cardsData[deckId][currentCardsIdx].lost} Rs`} />
      </div> */}
      {endTransition((transition, show) =>
        show ? (
          <animated.div
            style={transition}
            className={styles.endButtonContainer}
          >
            <CustomButton
              text={practice ? practiceLastPage : lastPage}
              onClick={onEnd}
              className={styles.font}
            />
          </animated.div>
        ) : (
          ""
        )
      )}

      {endTransition((transition, show) =>
        !show ? (
          <animated.div style={transition} className={styles.decksContainer}>
            <Row gutter={0}>
              {Object.keys(cardsData).map((cardId: string) => (
                <Col key={cardId} className="gutter-row" span={6}>
                  <Row
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    {recentDeck === cardId && (
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <span>{`${won} ${recentResult.won} Rs`}</span>
                        <br />
                        <span
                          style={{
                            color: "red",
                          }}
                        >{`${lost} ${recentResult.lost} Rs`}</span>
                      </div>
                    )}
                    <PokerDeck
                      trials={trialsCount}
                      deckId={cardId}
                      sendId={handelDeckClick}
                    />
                  </Row>
                </Col>
              ))}
            </Row>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
