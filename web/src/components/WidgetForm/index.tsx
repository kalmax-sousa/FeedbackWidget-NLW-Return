import { useState } from "react";
import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImage,
            alt: "Imagem de um balão de pensmento"
        }
    },
};

export type FeedbackType = keyof  typeof  feedbackTypes

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState <FeedbackType | null >(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const HandleRestartFeedback = () => {
        setFeedbackType(null);
        setFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent 
                ? (<FeedbackSuccessStep onFeedbackRestartRequested={HandleRestartFeedback}/>)
                : (
                    <>
                        {!feedbackType 
                            ? (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />) 
                            : (
                                <FeedbackContentStep 
                                    feedbackType={feedbackType} 
                                    onFeedbackRestartRequested={HandleRestartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />
                            )
                        }
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito por <a href="https://github.com/kalmax-sousa" className="underline underline-offset-2">Kalmax</a> durante NWL Return ❤️
            </footer>
        </div>
    );
}