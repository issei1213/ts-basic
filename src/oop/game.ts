type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Player = 'first' | 'second';

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  //パラメータの渡された位置を現在の位置を比較するメソッド
  distanceForm(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      };
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), //段(縦の位置)は正負反転
      };
    }
  }
}

// 駒を表すクラス
abstract class Piece {
  // この記述はPieceクラスのプロパティになる
  // protected: Pieceクラスとサブクラスでアクセスできる
  protected position: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    // 上記記述したpositionプロパティにPositonのコンストラクタが入ってくる
    this.position = new Position(suji, dan);
    // result Piece { position: Positon { suji: 1, dan: '3' } }
  }

  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(position: Position) {
    this.position = position;
  }

  // 移動できるかどうかを判定するメソッド
  abstract canMoveTo(position: Position, player: Player): boolean;
}

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceForm(position, player);
    return distance.suji < 2 && distance.dan < 2;
  }
}

// class Fu extends Piece {
//   canMoveTo(position: Position, player: Player): boolean {
//     const distance = this.position.distanceForm(position, player);
//     return distance.suji === 0 && distance.dan === 1;
//   }
// }

// class NariKin extends Fu {
//   canMoveTo(position: Position, player: Player): boolean {
//     const distance = this.position.distanceForm(position, player);
//     return (
//       // 移動先が１マス以内
//       distance.suji < 2 &&
//       distance.dan < 2 &&
//       // 左後方と右後方には進めない
//       distance.suji !== 0 &&
//       distance.dan === -1
//     );
//   }
// }

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')];
  }
}

const newGame = new Game();
console.log(newGame);

// console.log('newGame pieces', newGame.makePieces)
