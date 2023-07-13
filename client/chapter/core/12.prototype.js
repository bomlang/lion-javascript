/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const tiger = {
//   pattern: '호랑이무늬',
//   prey: '',
//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   },
// };

// 생성자 함수

function Animal() {
  this.stomach = [];
  this.legs = 4;
  (this.tail = true),
    (this.eat = function (food) {
      this.stomach.push(food);
    });
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();
