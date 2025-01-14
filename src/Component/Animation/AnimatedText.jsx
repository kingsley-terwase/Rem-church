import React, {useEffect, useRef} from "react";
import $ from "jquery";
import "animate.css";
import Box from "@mui/material/Box";

window.jQuery = $;
window.$ = $;

const AnimatedText = ({text, sx = {}}) => {
    const textRef = useRef(null);

    useEffect(() => {
        const loadScript = (src) =>
            new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });

        const loadTextillateDependencies = async () => {
            try {
                await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js");

                await loadScript("https://cdnjs.cloudflare.com/ajax/libs/textillate/0.4.0/jquery.textillate.min.js");

                if (typeof $(textRef.current).textillate === "function") {
                    $(textRef.current).textillate({
                        in: {effect: "fadeInDownBig"},
                        out: {effect: "fadeOut"},
                        loop: true,
                    });

                    setInterval(() => {
                        $(textRef.current).textillate("start");
                    }, 20000);
                } else {
                    console.error("textillate did not load correctly.");
                }
            } catch (error) {
                console.error("Error loading textillate or lettering.js:", error);
            }
        };

        loadTextillateDependencies();

        return () => {
            if (textRef.current && typeof $(textRef.current).textillate === "function") {
                $(textRef.current).textillate("destroy");
            }
        };
    }, []);

    return (
        <Box ref={textRef} className="tlt" sx={{...sx}}>
            {text}
        </Box>
    );
};

export default AnimatedText;
