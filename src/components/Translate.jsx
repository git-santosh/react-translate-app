import { useState, useEffect } from "react";

const Translate = ({ text, language }) => {
    const [translated, setTranslated] = useState("");
    useEffect(() => {
        const debounceTranslate = setTimeout(() => {
            const translateText = async () => {
                if (!text) return; // If text is empty, do nothing
                try {
                    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${language}`);
                    const data = await response.json();
                    if (data.responseData) {
                        console.log('Translated Text:', data.responseData.translatedText);
                        setTranslated(data.responseData.translatedText); // Update the state with the translated value
                    } else {
                        console.error('Translation error:', data);
                    }
                } catch (error) {
                    console.error('Error fetching translation:', error);
                }
            };
            translateText();
        }, 300); // Debounce delay of 500ms

        return () => clearTimeout(debounceTranslate); // Cleanup timeout on dependency change
    }, [text, language]);
    return (
        <div className="translate">
            <label className="label">Output</label>
            <h1 className="title">{translated.replace("&#39;", "'")}</h1>
        </div>
    );
}

export default Translate;