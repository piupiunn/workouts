class Storage {
  static addBookToStorage(newBook) {
    //Önceden oluşturduğumuz addFilmToStorage fonksiyonunu prototeype olarak storage fonksiyonumuza ekledik.
    let books = this.getBooksFromStorage(); //kitaplar isimli yeni bir let oluşturup storagedan bilgileri ekledik
    books.push(newBook); //oluşturulan yeni değeri kitaplara ekledik

    localStorage.setItem("books", JSON.stringify(books)); //Kitaplar a eklediğimiz değerleri de stringe çevirip storage a ekledik
  }

  static getBooksFromStorage() {
    //kitaplar ın storageda önceden olup olmadığını kontrol ettik. yoksa boş bir array oluşturduk. varsa olan değeri arraye dönüştürüp aldık. (çünkü localstorage sadece string değerleri kabul eder. bizde stringe arraye çevirdik.) Bu storage sorgulama ilşlemini çok fazla yapacağımız için, bu işlemlerin hepsini bir fonksiyona atayıp o fonksiyonu da storage ın prototeypenıa ekledik

    let books;

    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static deleteBookFromStorage(bookTitle) {
    let books = this.getBooksFromStorage();
    books.forEach(function (book, index) {
      if (book.title === bookTitle) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
  static clearAllBooksFromStorage() {
    localStorage.removeItem("books");
  }
}
