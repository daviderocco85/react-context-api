import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {

    const [maxPrice, setMaxPrice] = useState(null);
    return (
        <BudgetContext value={{ maxPrice, setMaxPrice }}>
            {children}
        </BudgetContext>
    );
}

