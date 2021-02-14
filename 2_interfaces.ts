interface Rect {
  readonly id: string; //нельзя изменить
  color?: string; //не обязательный параметр
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30,
  },
  color: '#ccc',
};

const rect2: Rect = {
  id: '123',
  size: {
    width: 10,
    height: 10,
  },
};

rect2.color = '#000';
// rect2.id = '2324'; //- ошибка! ридонли параметр

const rect3 = {} as Rect; // може указать к какому типу будет принадлежать
const rect4 = <Rect>{}; // старая запись

// ==========наследование========================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: '555',
  size: {
    width: 30,
    height: 30,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ====================================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date) {
    this.time = date;
  }
}

// =======Динамические ключи========

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
};