class UI {
  static addBookToUI(newBook) {
    /*<!-- <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-book" class = "btn btn-danger">Kitabı Sil</a></td>
      </tr> -->
     */

    const bookList = document.querySelector("#books"); //arayüzde seçilen kitapları dinamik olarak ekleyeceğimiz yer olan t-body i seçip kitapList isimli consta atadık.

    bookList.innerHTML += `
  
    <tr>
    
      <td><img src="${newBook.url}" class="rounded border border-primary" style="height: 200px; width:100px;"></td>
      <td>${newBook.title}</td>
      <td>${newBook.author}</td>
      <td>${newBook.publisher}</td>
      <td><a href="#" id = "delete-books" class = "btn btn-danger">Kitabı Sil</a></td>
    </tr
  
    `;
  }

  static clearInputs(element1, element2, element3, element4) {
    //Arayüzden formdaki input değerlerini silmek için fonksiyon oluşturuyoruz ki yeni bir kitap eklenmek istediğinde ekleme formları boş olsun.
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
  }

  static displayMessages(type, message) {
    const cardBody = document.querySelectorAll(".card-body")[0];

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1500);
  }

  static loadAllBooks(books) {
    //storageda ki kitapların arayüzde gösterilmesi için fonksiyonu yazıyoruz.Bu fonksiyon books şeklinde bir array alacak. Yani kitap listemize(t-body) yeni gelen arrayi ekleyecek
    const bookList = document.querySelector("#books"); //Storage daki her kitabı düzenleyip kitap listemize(t-body) ekledik.
    books.forEach(function (book) {
      bookList.innerHTML += `<tr>
    
      <td><img src="${book.url}" class="rounded border border-primary" style="height: 200px; width:100px;"></td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td><a href="#" id = "delete-book" class = "btn btn-danger">Kitabı Sil</a></td>
    </tr`;
    });
  }

  static deleteBookFromUI(element) {
    //Tıklanan kitaba ait tüm bilgileri silmek istediğimiz için kitabın iki üst parentine ulaşarak, o kitabın tüm bilgilerini uiden kaldırdık.
    element.parentElement.parentElement.remove();
  }

  static clearAllBooksFromUI() {
    const bookList = document.querySelector("#books");

    while (bookList.firstElementChild !== null) {
      bookList.firstElementChild.remove();
    }
  }
}
