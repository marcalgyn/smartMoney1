import { useEffect, useState } from 'react';
import { getBalance } from '../services/Balance';

const useBalance = () => {
    const [balance, setBalance] = useState();

    useEffect(() => {
        async function laodBalance() {
            const value = await getBalance();
            setBalance(value);
        }
        laodBalance();
    }, [])

    return [balance];
};

export default useBalance;