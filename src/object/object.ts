export default function objectSample() {
  const a = {
    name: 'issei',
    age: 28,
  };

  // a.name

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('Object object sample1: ', country);

  country = {
    language: 'English',
    name: 'United States of America',
  };

  console.log('Object object sample2: ', country);

  // オプショナルとreadonly
  const torahack: {
    age: number;
    lastName: string;
    gender?: string;
    readonly firstName: string;
  } = {
    age: 28,
    lastName: 'Miura',
    firstName: 'Issei',
  };

  torahack.gender = 'male'; //後から追加できる
  torahack.lastName = 'Kamado'; // 上書きできる
  // torahack.firstName = "Tanjiro"  // 上書き不可

  console.log('Object object sample3: ', torahack);

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.Chine = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object object sample4: ', capitals);
}
