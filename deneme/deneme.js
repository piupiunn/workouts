// Sayfadaki elementlerin seçilmesi
const ekleButonu = document.getElementById("buton");
const girilenGorev = document.getElementById("isim");
const gorevListeKutusu = document.getElementById("tasklistbox");
let elemanSilmeButonu = document.querySelectorAll(".fa-times");
const temizleButonu = document.querySelector("#hepsinisil");

// Butonlara dinleyici tanımlanması
ekleButonu.addEventListener("click", elemanEkle);
temizleButonu.addEventListener("click", elemanlariSil);

// Fonksiyonlar
function elemanEkle() {
  // Eğer input kısmı null ise uyarı verilmesi
  if (girilenGorev.value == "") alert("lutfen değer giriniz");
  // input kısmı null değilse aşağıdaki işlemler yapılır
  else {
    // li elementini seçerek li değişkenini ata
    var li = document.createElement("li");

    // li değişkeninin açıklamasını inputa yazılan yazıya eşitle
    li.innerText = girilenGorev.value;

    // i elementini seçerek i değişkenine ata
    var i = document.createElement("i");

    // i değişkenine class ataması yap
    i.classList = "fas fa-times";

    // i değişkenini li değişkenine ekleme
    li.appendChild(i);

    // li değişkenini görev listesi kısmına ekleme
    gorevListeKutusu.appendChild(li);

    // input 'un value değerini sıfırlama
    girilenGorev.value = "";

    // her eleman eklendiğinde, sayfadan "fa-times" class 'ına sahip elementlerin seçilmesi
    // bunu yapmamızın sebebi silme işlemi için gerekli olması
    elemanSilmeButonu = document.querySelectorAll(".fa-times");

    // tüm eleman silme butonlarına dinleyici tanımlandı
    for (var i = 0; i < elemanSilmeButonu.length; i++) {
      elemanSilmeButonu[i].addEventListener("click", elemansil);
    }
  }
}

// eleman silmek için gerekli fonksiyon
function elemansil() {
  var secim = confirm("Emin Misiniz?");
  if (secim == true) {
    // eğer onaylanırsa tıklanan i değişkeninin üst etiketi silinsin
    var silinecek = this.parentElement;
    silinecek.remove();
  }
}

// tüm elemanları silmek için gerekli fonksiyon
function elemanlariSil() {
  var secim = confirm(
    "Hepsini Kalıcı Olarak Silmek İstediğinize Emin Misiniz?"
  );
  if (secim == true) {
    // eğer onaylanırsa tüm elemanlar silinsin
    var silinecekler = document.querySelectorAll("li");

    for (var j = 0; j < silinecekler.length; j++) {
      silinecekler[j].remove();
    }
  }
}
