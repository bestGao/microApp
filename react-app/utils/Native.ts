class Native {
  curName = "Native";
  static test() {
    console.log("静态");
  }

  getName() {
    console.log(this, this.curName);
  }
}

export default Native;
