import { useState } from "react";

export const useDoubleHalfState = () => {
    const [dhValue, setDhValue] = useState<number>(10);
    return { dhValue, setDhValue };
};
