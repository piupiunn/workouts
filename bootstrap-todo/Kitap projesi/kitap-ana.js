const form1 = document.querySelector("#kitap-form"); //Form objesini seçtik.
const titleElement = document.querySelector("#title"); //Form objesinin içindeki title,yazar,url ve yayinci kısımlarını seçtik.
const yazarElement = document.querySelector("#yazar"); //
const urlElement = document.querySelector("#url"); //
const yayinciElement = document.querySelector("#yayinci"); //

const ui = new UI(); // UI objesini başlatma

addEventListeners(); //Oluşturulan tüm eventlistenerslerı çalıştırma.

function addEventListeners() {
  //Eventlisteneresleri oluşturma
  form.addEventListener("submit", addKitap);
}

/////////////
//Fonksiyonlar
/////////////

function addKitap(e) {
  const title = titleElement.value;
  const yazar = yazarElement.value;
  const url = urlElement.value;
  const yayinci = yayinciElement.value;

  if (title === "" || yazar === "" || url === "" || yayinci === "") {
    ui.displayMessages("danger", "Tüm alanları doldurun");
  } else {
    const newKitap = new Kitap(title, yazar, url, yayinci); // Öncdeden oluşturduğumuz kitap constructorunu kullanarak newKitap adlı yeni bir obje oluşturduk

    ui.addKitapToUI(newKitap); //Önceden oluştuduğumuz addKitapToUI fonksiyonuna new kitap değerini arayüze eklemesi için yolluyoruz.
  }
  ui.clearInputs(titleElement, urlElement, yayinciElement, yazarElement);
  e.preventDefault();
}
