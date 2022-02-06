const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");
const github = new Github(); //else durumunda aranan isme request atmak için daha önce oluşturduğumuz Githubdan yeni bir obje oluşturuyoruz.
const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getFormData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getFormData(e) {
  let username = nameInput.value.trim(); //forma girilen isim bilgisini username a atadık

  if (username === "") {
    alert("Lütfen geçerli bir kullanıcı adı girin.");
  } else {
    github
      .getGithubData(username) //github objesinin üstünde daha önce oluşturduğumuz getGithubData fonksiyonunu kullanıp username i gönderdik. Yani githuba Github() ı atadığımız için apinin içine username bilgisini yollamış olduk
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("Kullanıcı Bulunamadı");
        } else {
          ui.addSearchedUserToUI(username);
          Storage.addSearchedUserToStorage(username); //storage daki bilgileri storage a ekledik
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      }) //.getGithubData fonskiyonu asycn yazıldı ve bize bir obje dönecek. Eğer olumluysa .then le olumsuzsa .catch le dönen objeyi yakalamamız lazım.
      .catch((err) => ui.showError(err));
  }

  ui.clearInput(); //Form içeriğini temizlemesi için oluşturduğumuz fonskyionumuzu çağırıp form içeriğini arayüzden temizlettik
  e.preventDefault();
}

function clearAllSearched() {
  if (confirm("Emin misiniz ?")) {
    Storage.clearAllSearchedUsersFromStorage();
    ui.clearAllSearchedFromUI();
  }
}

function getAllSearched() {
  let users = Storage.getSearchedUsersFromStorage();

  let result = "";
  users.forEach((user) => {
    result += `<li class="list-group-item">${user}</li>`;
  });

  lastUsers.innerHTML = result;
}
