class Valid {
  constructor() {
    this.flag = true;
    this.good = '#AEEEEE';
    this.bad = '#FA8072';
    this.neutral = '#FFFFFF';
  }

  check(elem) {
    this.element = elem;
    this.length = parseInt(this.element.value.toString().length, 10);
    this.numeral = this.element.attributes.numeral.value; //number of symbols
    this.value = this.element.value;
    switch (this.numeral) {
      case '10':
      validation_flag = true;
      this.element.style.background = this.neutral;
        if (/[a-zA-Z]/g.test(this.value) === true) {
          validation_flag = false;
          this.element.style.background = this.bad;
          this.element.value = this.element.value.slice(0, -1);
        }
        break;
      case '2':
      validation_flag = true;
      this.element.style.background = this.neutral;
        if (this.length % 4 !== 0) {
          validation_flag = false;
          this.element.style.background = '#FA8072';
        }
        if (/[2-9a-zA-Z]/g.test(this.element.value)) {
          this.element.value = this.element.value.slice(0, -1);
          this.element.style.background = this.bad;
        }
        break;
      case '16':
      validation_flag = true;
      this.element.style.background = this.neutral;
        if (/[g-zG-Z]/g.test(this.element.value)) {
          validation_flag = false;
          this.element.style.background = this.bad;
          this.element.value = this.element.value.slice(0, -1);
        }
        break;
      case '8':
      validation_flag = true;
      this.element.style.background = this.neutral;
      if (/[9a-zA -Z]/g.test(this.element.value)) {
        validation_flag = false;
        this.element.style.background = this.bad;
        this.element.value = this.element.value.slice(0, -1);
      }
      default:
        this.element.style.background = this.good;
    }
  }



}
