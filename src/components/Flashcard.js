import React, { useState } from "react";
import "../index.css";

export default function Flashcard({ flashcard }){
	const [flip, setFlip] = useState(false);


	return(
		<section onClick={() => setFlip(!flip)} className="flashcard">
			{flip ? flashcard.answer : flashcard.question}
		</section>
	)
}