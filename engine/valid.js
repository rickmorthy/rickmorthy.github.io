class Valid {
  constructor(target) {
    this.target = target;
  }
  check(){
    if (/[0-1]{4}/gi.test(this.target.value) !== true) {
      this.target.style.background = '#FF0000';
    }
  }
}
