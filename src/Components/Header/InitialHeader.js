import "./InitialHeader.css";

import { generateRandomQuote } from "../utils/Quotes";

function InitialHeader() {
  const quote = generateRandomQuote();

  return (
    <div className="initial_header">
      <h1> {quote.quote} </h1>
      <h2>-{quote.author}-</h2>
    </div>
  );
}

export default InitialHeader;
