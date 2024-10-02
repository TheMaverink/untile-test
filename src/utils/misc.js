export const getExchangeId = (exchangeName, exchanges) => {
  return exchanges.filter((exchange) => exchange?.name == exchangeName)[0];
};

export const getCoinNameByTicker = (ticker, coins) => {
    return coins.filter((coin) => coin?.symbol == ticker)[0];
  };
  

export const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (error) {
      console.error('Could not save state', error);
    }
  };
  
  export const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
      console.error('Could not load state', error);
      return undefined;
    }
  };