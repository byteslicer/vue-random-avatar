import seedrandom from 'seedrandom';

export default class Random {
  constructor(seed) {
    this.rng = seedrandom(seed);
  }

  number() {
    return this.rng();
  }

  integer(a = 0, b = 1) {
    return Math.floor(this.rng() * b) + a;
  }

  select(array) {
    return array[this.integer(0, array.length - 1)];
  }

  colorRGB() {
    const r = this.integer(0, 255);
    const g = this.integer(0, 255);
    const b = this.integer(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  colorHSL(s = 100, l = 40) {
    const h = this.integer(0, 360);
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}
