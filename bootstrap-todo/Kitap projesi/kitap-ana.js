const form = document.querySelector("#book-form"); //Form objesini seçtik.
const titleElement = document.querySelector("#title"); //Form objesinin içindeki title,yazar,url ve yayinci kısımlarını seçtik.
const authorElement = document.querySelector("#author"); //
const urlElement = document.querySelector("#url"); //
const publisherElement = document.querySelector("#publisher"); //
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-books");

eventListeners(); //Oluşturulan tüm eventlistenerslerı çalıştırma.

function eventListeners() {
  //Eventlisteneresleri oluşturma
  form.addEventListener("submit", addBook);
  document.addEventListener("DOMContentLoaded", function () {
    //Sayfanın her yeniden yüklenmesine evenlistener atadık.
    let books = Storage.getBooksFromStorage(); //storagedan kitapları storageın içine daha önce yazdığımız fonksiyonu kullanarak çektik
    UI.loadAllBooks(books); //ui ın içinde ki loadAllKitaplar fonksiyonuna, storagedan çektğimiz kitaplar let ini yolladık.Yani storageda ki kitapları ui da göstermesini istedik.
  });
  cardBody.addEventListener("click", deleteBook);
  clear.addEventListener("click", clearAllBooks);
}

/////////////
//Fonksiyonlar
/////////////

function clearAllBooks() {
  if (confirm("Emin misiniz ?")) {
    UI.clearAllBooksFromUI();
    Storage.clearAllBooksFromStorage();
  }
}

function addBook(e) {
  const title = titleElement.value;
  const author = authorElement.value;
  const url = urlElement.value;
  const publisher = publisherElement.value;

  if (title === "" || author === "" || url === "" || publisher === "") {
    UI.displayMessages("danger", "Tüm alanları doldurun");
  } else {
    const newBook = new Book(title, author, url, publisher); // Öncdeden oluşturduğumuz kitap constructorunu kullanarak newKitap adlı yeni bir obje oluşturduk

    UI.addBookToUI(newBook); // new kitap değerini arayüze eklemesi için yolluyoruz.
    Storage.addBookToStorage(newBook); //Storage a kitap ekleme
    UI.displayMessages("success", "Kitap başarıyla eklendi");
  }

  UI.clearInputs(titleElement, urlElement, publisherElement, authorElement); //clearInputs fonksiyonuyla form inputlarını temizledik.
  e.preventDefault();
}

function deleteBook(e) {
  if (e.target.id === "delete-book") {
    //eğer tıklanan yerin id si delete-book sa deleteKitapFromUI fonskyionuyla tıklanan yerin silinmesini söyledik.
    UI.deleteBookFromUI(e.target);
    Storage.deleteBookFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent
    );

    UI.displayMessages("success", "Silme işlemi tamamlandı");
  }
}
