import { useState, useRef } from "react";
import TickSvg from "../assets/TickSvg";
import CopyIcon from "../assets/copysvg";

// eslint-disable-next-line react/prop-types
const RawJson = ({randomJsonString}) => {
    const [showTick, setShowTick] = useState(false);
    const jsonRef = useRef(null);

    const handleCopy = () => {
        if (jsonRef.current) {
            // Create a temporary textarea element
            const textarea = document.createElement("textarea");
            textarea.value = randomJsonString;
            document.body.appendChild(textarea);

            // Select and copy the text
            textarea.select();
            document.execCommand("copy");

            // Clean up the temporary textarea
            document.body.removeChild(textarea);

            setShowTick(true);
            setTimeout(() => {
                setShowTick(false);
            }, 3000);
        }
    };


    return (
        <div className="container">
            {!showTick && (
                <div
                    onClick={handleCopy}
                    style={{
                        position: "absolute",
                        right: 10,
                        cursor: "pointer",
                    }}
                >
                    <CopyIcon />
                </div>
            )}
            {showTick && (
                <div style={{
                    position: "absolute",
                    right: 20,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                }}>
                    <TickSvg />
                    <span style={{
                        color: "#25D366",
                        fontWeight: "bold",
                        fontSize: "16px",
                        backgroundColor: "#333",
                        padding: "5px 10px",
                        borderRadius: "5px",
                    }}>
                        Copied
                    </span>
                </div>
            )}
            <pre
                id="json"
                ref={jsonRef}
                style={{
                    margin: 0,
                    padding: 0,
                    userSelect: "text", 
                }}
            >
                {randomJsonString}
            </pre>
        </div>
    );
};

export default RawJson;
