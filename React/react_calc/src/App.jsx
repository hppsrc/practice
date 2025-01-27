import { useState } from "react";
import Button from "./button";

export default function App() {
    const [display, setDisplay] = useState("0");

    const rows = [
        {
            buttons: ["1", "2", "3", "+"],
            color: "#ccf",
            operatorColor: "#cfc",
            actions: {
                "+": () => setDisplay(prev => prev + "+")
            }
        },
        {
            buttons: ["4", "5", "6", "-"],
            color: "#ccf",
            operatorColor: "#cfc",
            actions: {
                "-": () => setDisplay(prev => prev + "-")
            }
        },
        {
            buttons: ["7", "8", "9", "x"],
            color: "#ccf",
            operatorColor: "#cfc",
            actions: {
                "x": () => setDisplay(prev => prev + "*")
            }
        },
        {
            buttons: ["0", ",", "=", "/"],
            color: "#ccf",
            operatorColor: "#cfc",
            actions: {
                "/": () => setDisplay(prev => prev + "/"),
                "=": () => {
                    try {
                        setDisplay(eval(display.replace("x", "*")));
						console.log("uodate")
                    } catch {
                        setDisplay("ERROR");
                    }
                }
            }
        }
    ];

    const getButtonColor = (text, row) => {
        if (text === "=") return "#ffc";
        if (text === ",") return "#ccc";
        if (["+", "-", "x", "/"].includes(text)) return row.operatorColor;
        return row.color;
    };

    const handleButtonClick = (text, row) => {
        if (/[0-9]/.test(text)) {
            setDisplay(prev => prev === "0" ? text : prev + text);
            return;
        }

        if (row.actions?.[text]) {
            row.actions[text]();
        }
    };

    return (
        <div id="cont">
            <p>{display}</p>
            {rows.map((row, index) => (
                <div key={index} className="rows">
                    {row.buttons.map((text, btnIndex) => (
                        <Button
                            key={btnIndex}
                            text={text}
                            color={getButtonColor(text, row)}
                            onClick={() => handleButtonClick(text, row)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}