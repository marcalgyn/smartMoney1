import {useState, useCallback} from 'react';
import {getBalanceSumByCategory} from '../services/Balance';
import {useFocusEffect} from '@react-navigation/native';

const useBalanceSumByCategory = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadBalanceSumByCategory = async () => {
        const data = await getBalanceSumByCategory(days);
        setBalanceSum([...data]);
      };
      loadBalanceSumByCategory();
    }, [days]),
  );

  return [balanceSum];
};

export default useBalanceSumByCategory;
