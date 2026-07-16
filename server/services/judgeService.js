import axios from "axios";

export const runCode = async (language, code) => {
    try {
        const languageMap = {
            cpp: {
                language: "c++",
                version: "10.2.0"
            },
            java: {
                language: "java",
                version: "15.0.2"
            },
            python: {
                language: "python",
                version: "3.10.0"
            }
        };

        const lang = languageMap[language];

        const response = await axios.post(
            "https://emkc.org/api/v2/piston/execute",
            {
                language: lang.language,
                version: lang.version,
                files: [
                    {
                        content: code
                    }
                ]
            }
        );

        return {
            output: response.data.run.output
        };

    } catch (error) {
        console.log("PISTON ERROR:");
        console.log(error.response?.data || error.message);
        throw error;
    }
};