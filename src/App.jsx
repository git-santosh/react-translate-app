
import React, { useState } from "react";
import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";
export default function App() {
    const [txt, setTxt] = useState("");
    const [lang, setLang] = useState("ja");
    console.log('text',txt)
    return (
        <div className="App">
            <Field onChange={setTxt}/>
            <Languages onLanguageChange={setLang} language={lang} />
            <hr />
            <Translate text={txt} language={lang} />
        </div>
    );
}