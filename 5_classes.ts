class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberofWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel; // переопределить значение можно только в методе конструктор
  }
}

//идентичная запись только короче
class Car2 {
  readonly numbersofWheels: number = 4;
  constructor(readonly model: string) {}
}

// =========модификаторы=============

class Animal {
  protected voice: string = ''; //можно использоват только в этом классе и субклассах
  public color: string = 'black'; //по умолчанию задается паблик, но тут указал для очевидности

  constructor() {
    this.go();
  }

  private go() {
    //можно использовать только в класе где создал
    console.log('GO');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
// cat.voice -- ошибка

// ========Абстрактные классы========
// от них можно наследоваться но они ни во чот не компилируются
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
}
