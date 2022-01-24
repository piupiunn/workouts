function Bilgisayar(marka, ram, ekranKarti) {
  this.marka = marka;
  this.ram = ram;
  this.ekranKarti = ekranKarti;

  this.ShowInfos = function () {
    //
    console.log = (this.marka, this.ram, this.ekranKarti);
  };
}

const bil1 = new Bilgisayar("Hp", 16, "nvdia 3080");

const bil2 = new Bilgisayar("Apple", 32, "M1");

bil1.ShowInfos();
bil2.ShowInfos();
