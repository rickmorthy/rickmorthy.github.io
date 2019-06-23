class Valid {
  constructor() {
    // this.target = target;
    this.flag = true;

  }
  check(){
    // console.dir(this.value);
    this.length = parseInt(this.element.value.toString().length,10);
    this.numeral = this.element.attributes.numeral.value;//number of symbols
    this.value = this.element.value;
    // console.log(/$[0-9]/g.test(this.value));
    if (this.numeral === '10' && /[a-zA-Z]/g.test(this.value) === true) {
      this.setFlag = false;
      this.element.style.background = '#FA8072';

      this.element.value = this.element.value.slice(0,-1);
    }else if (this.numeral === '2' && this.length % 4 !== 0 && /[2-9a-zA-Z]/g.test(this.element.value === true)) {
      this.setFlag = false;
      this.element.style.background = '#FA8072';
    }else if (this.numeral === '16'  ) {
      // console.log('This is hex');
      this.setFlag = false;
      this.element.style.background = '#FA8072';
      if (/[g-zG-Z]/g.test(this.element.value) ) {
        console.log(/[g-zG-Z]/g.test(this.element.value));
        this.element.value = this.element.value.slice(0,-1);
      }

      }else{
      // this.element.style.background = '#FF0000';
      this.element.style.background = '#AEEEEE';

    }
  }
   warning(){

  }


}
