import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import GeneratedWords from '@/Components/GeneratedWords';
import RestartButton from "@/Components/RestartButton";
import Results from "@/Components/Results";
import TypingMode from "@/Components/TypingMode";
import UserTypings from '@/Components/UserTypings';
import useEngine from '@/hooks/useEngine';
import { calculateAccuracyPercentage } from "@/utils/helpers";

export default function Dashboard({ auth }) {
    const { words, typed, timeLeft, errors, state, restart, totalTyped, handleSeconds, handleNumberOfWords, handleWordTypes, wordType, numberOfWords, countDownSeconds } =
    useEngine();

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Typing' />
    <main>
    <section>
      {state !== "finish" && (
        <>
          <TypingMode handleSeconds={handleSeconds} handleNumberOfWords={handleNumberOfWords} handleWordTypes={handleWordTypes} />

            <WordType wordType={wordType}/>
            <NumberOfWords numberOfWords={numberOfWords} />
            <CountdownTimer timeLeft={timeLeft} />

          <WordsContainer>
            <GeneratedWords key={words} words={words} />
            <UserTypings
              className="absolute inset-0"
              words={words}
              userInput={typed}
            />
          </WordsContainer>
        </>
      ) }

      <Results
        className="mt-10"
        state={state}
        typeErrors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
        wordType={wordType}
        numberOfWords={numberOfWords}
        auth={auth}
        countDownSeconds={countDownSeconds}
      />

      <RestartButton
            className={"mx-auto mt-10 text-slate-500"}
            onRestart={restart}
      />
      </section>
    </main>
    </AuthenticatedLayout>
  );
};

const WordsContainer = ({ children }) => {
    return (
      <div className="relative text-3xl max-w-7xl leading-relaxed break-all mt-3">
        {children}
      </div>
    );
  };

  const CountdownTimer = ({ timeLeft }) => {
    return <h2 className="text-primary-400 text-xl font-medium">Time: {timeLeft}s</h2>;
  };

  const WordType = ({ wordType }) => {
    return <h2 className="text-primary-400 text-xl font-medium">Word Type: {wordType}</h2>;
  };

  const NumberOfWords = ({ numberOfWords }) => {
    return <h2 className="text-primary-400 text-xl font-medium">{numberOfWords} words</h2>;
  };
