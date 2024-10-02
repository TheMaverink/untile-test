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

export const getCoinName = (symbol) => {
  const coins = {
    btc: 'Bitcoin',
    eth: 'Ethereum',
    ltc: 'Litecoin',
    bch: 'Bitcoin Cash',
    bnb: 'Binance Coin',
    eos: 'EOS',
    xrp: 'Ripple',
    xlm: 'Stellar',
    link: 'Chainlink',
    dot: 'Polkadot',
    yfi: 'Yearn Finance',
    usd: 'US Dollar',
    aed: 'United Arab Emirates Dirham',
    ars: 'Argentine Peso',
    aud: 'Australian Dollar',
    bdt: 'Bangladeshi Taka',
    bhd: 'Bahraini Dinar',
    bmd: 'Bermudian Dollar',
    brl: 'Brazilian Real',
    cad: 'Canadian Dollar',
    chf: 'Swiss Franc',
    clp: 'Chilean Peso',
    cny: 'Chinese Yuan',
    czk: 'Czech Koruna',
    dkk: 'Danish Krone',
    eur: 'Euro',
    gbp: 'British Pound Sterling',
    gel: 'Georgian Lari',
    hkd: 'Hong Kong Dollar',
    huf: 'Hungarian Forint',
    idr: 'Indonesian Rupiah',
    ils: 'Israeli Shekel',
    inr: 'Indian Rupee',
    jpy: 'Japanese Yen',
    krw: 'South Korean Won',
    kwd: 'Kuwaiti Dinar',
    lkr: 'Sri Lankan Rupee',
    mmk: 'Burmese Kyat',
    mxn: 'Mexican Peso',
    myr: 'Malaysian Ringgit',
    ngn: 'Nigerian Naira',
    nok: 'Norwegian Krone',
    nzd: 'New Zealand Dollar',
    php: 'Philippine Peso',
    pkr: 'Pakistani Rupee',
    pln: 'Polish Zloty',
    rub: 'Russian Ruble',
    sar: 'Saudi Riyal',
    sek: 'Swedish Krona',
    sgd: 'Singapore Dollar',
    thb: 'Thai Baht',
    try: 'Turkish Lira',
    twd: 'New Taiwan Dollar',
    uah: 'Ukrainian Hryvnia',
    vef: 'Venezuelan Bolívar',
    vnd: 'Vietnamese Dong',
    zar: 'South African Rand',
    xdr: 'Special Drawing Rights',
    xag: 'Silver',
    xau: 'Gold',
    bits: 'Bitcoin Bits',
    sats: 'Satoshis',
  };

  return coins[symbol];
};
