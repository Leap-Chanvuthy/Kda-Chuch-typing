import { useState } from "react"
import { TbWorld } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import Card from "./Card";
const TypingMode = ({ handleSeconds, handleNumberOfWords, handleWordTypes }) => {

    const [openModal, setOpenModal] = useState(false);

    const [timeMode, setTimeMode] = useState(true)

    const [wordMode, setWordMode] = useState(false)
    const [languageModel, setLanguageModel] = useState(false);

    const [customNumberOfWordsModal, setCustomNumberOfWordsModal] = useState(false)
    const [customTimeModal, setCustomTimeModal] = useState(false)

    const [word, setWord] = useState(true);
    const [number, setNumber] = useState(false)

    return (
        <Card className='mb-10'>

            {word ? (
                <div onClick={() => { handleWordTypes('words'); setWord(true); setNumber(false); }} className="text-primary-500 hover:text-gray-800 cursor-pointer"><strong>Aa</strong> Words</div>
            ) : (
                <div onClick={() => { handleWordTypes('words'); setWord(true); setNumber(false); }} className="text-slate-500 hover:text-gray-800 cursor-pointer"><strong>Aa Words</strong></div>
            )}
            {number ? (
                <div onClick={() => { handleWordTypes('number'); setNumber(true); setWord(false); }} className="text-primary-500 hover:text-gray-800 cursor-pointer"># Number</div>
            ) : (
                <div onClick={() => { handleWordTypes('number'); setNumber(true); setWord(false); }} className="text-slate-500 hover:text-gray-800 cursor-pointer"># Number</div>
            )}


            <div
                onClick={() => setLanguageModel(!languageModel)}
                className="text-slate-500 hover:text-gray-800 cursor-pointer">
                <TbWorld />
            </div>
            <button onClick={() => setOpenModal(!openModal)} className="text-slate-500 hover:text-gray-800 cursor-pointer">...</button>
            <div className="bg-gray-800 p-1"></div>

            {timeMode ? (
                <button
                    onClick={() => { setTimeMode(true); setWordMode(false) }}
                    className="text-primary-500 hover:text-gray-800 cursor-pointer flex justify-center items-center">
                    Time
                    <BiTimeFive />
                </button>
            ) : (
                <button
                    onClick={() => { setTimeMode(true); setWordMode(false) }}
                    className="text-slate-500 hover:text-gray-800 cursor-pointer flex justify-center items-center">
                    Time <BiTimeFive />
                </button>
            )}

            {wordMode ? (
                <button
                    onClick={() => { setWordMode(true); setTimeMode(false) }}
                    className="text-primary-500 hover:text-gray-800 cursor-pointer">
                    Words Count

                </button>
            ) : (
                <button
                    onClick={() => { setWordMode(true); setTimeMode(false) }}
                    className="text-slate-500 hover:text-gray-800 cursor-pointer">
                    Words Count

                </button>
            )}

            <div className="bg-gray-800 p-1"></div>

            {wordMode && (
                <>
                    <button onClick={() => handleNumberOfWords(15)} className="text-slate-500 hover:text-gray-800 cursor-pointer">15</button>
                    <button onClick={() => handleNumberOfWords(30)} className="text-slate-500 hover:text-gray-800 cursor-pointer">30</button>
                    <button onClick={() => handleNumberOfWords(120)} className="text-slate-500 hover:text-gray-800 cursor-pointer">120</button>
                </>
            )}

            {timeMode && (
                <>
                    <button onClick={() => handleSeconds(15)} className="text-slate-500 hover:text-gray-800 cursor-pointer">15s</button>
                    <button onClick={() => handleSeconds(30)} className="text-slate-500 hover:text-gray-800 cursor-pointer">30s</button>
                    <button onClick={() => handleSeconds(60)} className="text-slate-500 hover:text-gray-800 cursor-pointer">60s</button>
                </>
            )}

            {openModal && (
                <WordTypeModal setOpenModal={setOpenModal} handleWordTypes={handleWordTypes} />
            )}

            {languageModel && (
                <LanguageTypeModal setLanguageModel={setLanguageModel} handleWordTypes={handleWordTypes} />
            )}

            {customNumberOfWordsModal && (
                <CusomNumberWord setCustomNumberOfWordsModal={setCustomNumberOfWordsModal} />
            )}

            {customTimeModal && (
                <CustomTimeModal setCustomTimeModal={setCustomTimeModal} />
            )}

        </Card>

    )
}

export default TypingMode




const WordTypeModal = ({ setOpenModal, handleWordTypes }) => {

    const options = [
        { range: 1, displays: "city" },
        { range: 2, displays: "name" },
        { range: 3, displays: "animal" },
        { range: 4, displays: "commerce" },
        { range: 5, displays: "company" },
        { range: 6, displays: "lorem" },
        { range: 7, displays: "music" },
        { range: 8, displays: "vehicle" },
        { range: 9, displays: "system" },
    ];


    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setOpenModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-800  rounded-md shadow-lg">
                    {options.map((range) => (
                        <div
                            onClick={() => { setOpenModal(false); handleWordTypes(range.displays) }}
                            className="text-slate-500 hover:text-white cursor-pointer" >
                            {range.displays.toLocaleUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


const LanguageTypeModal = ({ setLanguageModel, handleWordTypes }) => {
    const languageOptions = [
        { range: 1, displays: "russian" },
        { range: 2, displays: "spainish" },
        { range: 3, displays: "french" },
        { range: 4, displays: "indian eng" },
        { range: 5, displays: "italian" },
        { range: 6, displays: "arabic" },
    ];


    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setLanguageModel(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-800  rounded-md shadow-lg">
                    {languageOptions.map((range) => (
                        <div
                            onClick={() => { setLanguageModel(false); handleWordTypes(range.displays) }}
                            className="text-slate-500 hover:text-white cursor-pointer" >
                            {range.displays.toLocaleUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function CusomNumberWord({ setCustomNumberOfWordsModal }) {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setCustomNumberOfWordsModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-800  rounded-md shadow-lg">
                    <div className="flex justify-between gap-2">
                        <label htmlFor="" >
                            Custom Words Count
                        </label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}


function CustomTimeModal({ setCustomTimeModal }) {
    return (
        <Modal onClick={() => setCustomTimeModal(false)}>
            <div className="flex justify-between gap-2">
                <label htmlFor="">
                    Custom Time Count
                </label>
                <input type="text" />
            </div>
        </Modal>
    )
}



function Modal({ children, onClick }) {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={onClick}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                {children}
            </div>
        </div>
    )
}
