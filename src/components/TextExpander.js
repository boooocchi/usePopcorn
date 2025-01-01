import { useState } from "react";

function TextExpander({
  children,
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(expanded);
  const capStr = (str) => {
    const cappedStr = str.split(" ").slice(0, collapsedNumWords).join(" ");
    return cappedStr;
  };
  const buttonStyle = {
    color: buttonColor,
    cursor: "pointer"
  };
  const numWords = children.split(" ").length;
  const displayText = capStr(children);

  return (
    <div className={className}>
      <p>{isOpen ? children : `${displayText}...`}</p>
      {collapsedNumWords < numWords && (
        <span
          role="button"
          onClick={() => setIsOpen((prev) => !prev)}
          style={buttonStyle}
        >
          {isOpen ? collapseButtonText : expandButtonText}
        </span>
      )}
    </div>
  );
}
