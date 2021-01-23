// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is sigeed in! Username is', username);
    return true;
  } else {
    console.log('Function parameters sample 2: User is not sigeed in!');
    return false;
  }
};

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is sigeed in! Username is', username);
    return true;
  } else {
    console.log('Function parameters sample 4: User is not sigeed in!');
    return false;
  }
};

// レストパラメータを持つ関数
export const sumProductsPrice = (...productPrice: number[]): number => {
  return productPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice;
  }, 0);
};
