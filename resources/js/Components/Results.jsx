import { motion } from "framer-motion";
import { formatPercentage, calculateWPM } from "../utils/helpers";
import html2canvas from 'html2canvas';
import { useState, useRef } from "react";

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head, Link, usePage } from '@inertiajs/react';
import useEngine from "@/hooks/useEngine";

const Results = ({
  state,
  typeErrors,
  accuracyPercentage,
  total,
  className = "",
  numberOfWords,
  wordType,
  countDownSeconds,

}) => {

  const { auth } = usePage().props;

  const { data, setData, post, processing, reset, errors } = useForm({
    wpm: '',
    accuracy: '',
    error: '',
    typed: '',
    time: '',
  });

  const [screenshot, setScreenshot] = useState(null);
  const [buttonSave, setButtonSave] = useState(true);
  const appRef = useRef(null);
  const { restart } = useEngine();

  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };

  const submit = (e) => {
    e.preventDefault();
    data.wpm = calculateWPM(total, countDownSeconds).toFixed(0);
    data.accuracy = formatPercentage(accuracyPercentage);
    data.error = typeErrors;
    data.time = countDownSeconds;
    data.typed = total;
    post(route('typing.store'), { onSuccess: () => reset() });
    setButtonSave(false);
    restart();
    window.location.href = "/dashboard";
    setButtonSave(true);
  };

  const takeScreenshot = () => {
    html2canvas(appRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      setScreenshot(imgData);
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = 'result.png';
      downloadLink.click();
    });
  };

  return (

    <motion.ul
      initial={initial}
      animate={animate}
      id="result"
      ref={appRef}
      className={`flex flex-col items-center text-4xl text-primary-400 space-y-3 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        className="text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        Accuracy: {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1 }}
        className="text-red-500"
      >
        {/* Errors: {typeErrors} */}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.4 }}
      >
        Typed: {total}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 1.8 }}
      >
        WPM: {calculateWPM(total, countDownSeconds).toFixed(0)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 2.4 }}
      >
        Word Type: {wordType}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 2.8 }}
      >
        Time: {countDownSeconds}s
      </motion.li>
      {!auth.user && (
        <motion.a
          href="/register"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3, delay: 3.4 }}
          className="text-slate-400 text-lg cursor-pointer hover:underline"
        >
          Sign In To Save Result
        </motion.a>
      )}

      {buttonSave ? (
        <form onSubmit={submit}>
          <PrimaryButton className="mt-4" disabled={processing}>Save</PrimaryButton>
        </form>
      ) : (
        <div className="text-lg">Saved</div>
      )}

      <motion.li
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3, delay: 3.8 }}
        className="text-slate-400 text-lg cursor-pointer hover:underline"
      >
        <button onClick={takeScreenshot}>Take Screenshot</button>
      </motion.li>
    </motion.ul>
  );
};

export default Results;
