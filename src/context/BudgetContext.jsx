import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [budgetMode, setBudgetMode] = useState(false);

    return (
        <BudgetContext value={{ budgetMode, setBudgetMode }}>
            {children}
        </BudgetContext>
    );
}