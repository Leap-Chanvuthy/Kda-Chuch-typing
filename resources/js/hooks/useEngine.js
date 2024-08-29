import { useCallback, useEffect, useState, useMemo } from "react";
import { countErrors, debug } from "../utils/helpers";
import useCountdown from "./useCountdown";
import useTypings from "./useTypings";
import useWords from "./useWords";

const NUMBER_OF_WORDS = 30;
const COUNTDOWN_SECONDS = 15;
const WORD_TYPE = 'words';

const useEngine = () => {

  const [numberOfWords, setNumberOfWords] = useState(NUMBER_OF_WORDS);
  const [countDownSeconds, setCountDownSeconds] = useState(COUNTDOWN_SECONDS);
  const [wordType, setWordType] = useState(WORD_TYPE)

  console.log(countDownSeconds)
  const [state, setState] = useState("start");
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdown(countDownSeconds);
  const { words, updateWords } = useWords(numberOfWords, wordType);
  const { cursor, typed, clearTyped, totalTyped, resetTotalTyped } = useTypings(
    state !== "finish"
  );
  const [errors, setErrors] = useState(0);

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const restart = useCallback(() => {
    debug("restarting...");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  const onChangeStateRestart = useMemo(() => {
    debug("restarting...");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  const handleSeconds = (value) => {
    setCountDownSeconds(value)
    restart()
  }

  const handleNumberOfWords = (value) => {
    setNumberOfWords(value);
    restart()
  }

  const handleWordTypes = (option) => {
    setWordType(option)
    restart()
  }

  const sumErrors = useCallback(() => {
    debug(`cursor: ${cursor} - words.length: ${words.length}`);
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown]);

  useEffect(() => {
    if (!timeLeft && state === "run") {
      debug("time is up...");
      setState("finish");
      sumErrors();
    }
  }, [timeLeft, state, sumErrors]);


  useEffect(() => {
    if (areWordsFinished) {
      debug("words are finished...");
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [clearTyped, areWordsFinished, updateWords, sumErrors]);


  return { state, words, typed, errors, restart, timeLeft, totalTyped, handleSeconds, handleNumberOfWords, handleWordTypes, wordType, numberOfWords, countDownSeconds };
};

export default useEngine;
