/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    this.name = name;
    console.log('컨스트럭터는 최초 1회 실행됩니다');
  }

  set eat(food) {
    this.stomach.push(food);
  }

  get eat() {
    return this.stomach;
  }
}

class Tiger extends Animal {
  prey = '';

  constructor(name, pattern) {
    // super는 부모에 영역에 있는 name을 가져와주는 함수입니다.
    super(name);
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에 조용히 접근하다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }

  static sleep() {
    console.log(name + '잠을 잡니다.');
  }
}

const beom = new Tiger('범');
const hoho = new Tiger('hoho', '호피무늬');
// const tiger = new Animal('호돌이');
