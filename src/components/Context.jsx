import { createContext, useContext, useState } from "react";

const TestContext = createContext();

export const useTestContext = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
    const [testValue, setTestValue] = useState(0);

    const changeValue = () => {
        setTestValue(testValue + 1);
    };

    return (
        <TestContext.Provider value={{ testValue, changeValue }}>
            {children}
        </TestContext.Provider>
    );
};
