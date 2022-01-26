function UI() {}

UI.prototype.addKitapToUI = function (newKitap) {
  /*<!-- <tr>
      <td><img src="" class="img-fluid img-thumbnail"></td>
      <td></td>
      <td></td>
      <td><a href="#" id = "delete-books" class = "btn btn-danger">Kitabı Sil</a></td>
    </tr> -->
   */

  const kitapList = document.querySelector("#books"); //arayüzde seçilen kitapları dinamik olarak ekleyeceğimiz yer olan t-body i seçip kitapList isimli consta atadık.

  kitapList.innerHTML += `

  <tr>
  
    <td><img src="${newKitap.url}" class="rounded border border-primary" style="height: 200px; width:100px;"></td>
    <td>${newKitap.title}</td>
    <td>${newKitap.yazar}</td>
    <td>${newKitap.yayinci}</td>
    <td><a href="#" id = "delete-books" class = "btn btn-danger">Kitabı Sil</a></td>
  </tr

  `;
};

UI.prototype.clearInputs = function (element1, element2, element3, element4) {
  //Arayüzden formdaki input değerlerini silmek için fonksiyon oluşturuyoruz ki yeni bir kitap eklenmek istediğinde ekleme formları boş olsun.
  element1.value = "";
  element2.value = "";
  element3.value = "";
  element4.value = "";
};

UI.prototype.displayMessages = function (type, message) {
  const cardBody = document.querySelectorAll(".card-body")[0];

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  cardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 1500);
};
