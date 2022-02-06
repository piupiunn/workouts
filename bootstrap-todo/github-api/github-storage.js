class Storage {
  static getSearchedUsersFromStorage() {
    //Tüm kullanıcıları al
    let users;

    if (localStorage.getItem("searched") === null) {
      // storage da "searched" değeri var mı kontrol ettik yoksa boş bir string oluşturduk
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched")); //varsa string değeri arraye çevirip aldık.
    }
    return users;
  }

  static addSearchedUserToStorage(username) {
    //Kullanıcı ekle
    let users = this.getSearchedUsersFromStorage();

    if (users.indexOf(username) === -1) {
      //index of la username değeri storage da var mı kontrol ettik eğer yoksa yani -1 dönerse eklemesini söyledik. Böylece aynı username birden fazla kez eklenmeyecek
      users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users)); //localstorage ı güncelledik
  }

  static clearAllSearchedUsersFromStorage() {
    //Tüm kullanıcıları sil
    localStorage.removeItem("searched"); //
  }
}
