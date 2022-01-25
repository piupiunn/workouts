// Gerekli yerleri seçme
////////////////////////////////////////

const form = document.querySelector("#todo-form"); //Todo eklemek için form seçme
const todoInput = document.querySelector("#todo"); //Formda ki input değerini ekleyeceğimiz için Formun İnput değerini seçme
const todoList = document.querySelector(".list-group"); //Yeni formun <ul> elementinin içine eklenmesi gerektiğinden <ul>'yi parent olarak seçiyoruz.
//Burada <ul> elementi bootstrap classı belirtilerek seçildi
const firstCardBody = document.querySelectorAll(".card-body")[0]; //Form ekleme işlemi başarılı yada başarız olduğunda todo kartının iç kısmının  hemen altına alert eklemek için kartı parent olarak seçmemiz gerekli.
//İki tane card-body var ve işlem yapmamız gereken ilk card-cody olduğundan document.querySelectorAll(".card-body")[0] yapıp ilk card-bodyi seçiyoruz.
const secondCardBody = document.querySelectorAll(".card-body")[1]; //İkinci card-bodyi seçiyoruz
const filter = document.querySelector("#filter"); //Todo arama kısmını seçiyoruz
const clearButton = document.querySelector("#clear-todos"); //Tüm todoları temizle butonunu seçiyoruz

//////////////////////////////////////////////////////////////////////////////////////////////

//Event listener fonksiyonlarını çalıştırma
eventListeners();
////////////////////////////////

//Tüm event listenerler
function eventListeners() {
  form.addEventListener("submit", addTodo); //Formda submit olayı olduğunda addTodo fonsiyonunu çalıştırsın
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI); //Sayfa yenilendiğinde storageda ki todoları arayüzde de göstersin.
  secondCardBody.addEventListener("click", deleteTodo); //Belirlenen yere tıklandığında todo silinsin.
  secondCardBody.addEventListener("click", cizgiTodo);

  filter.addEventListener("keyup", filterTodos); //Arama özelliği için eventlistener atadık.
  clearButton.addEventListener("click", clearAllTodos); //Tüm todoları silmek için butonuna eventlistener atadık.
}

////////////////////////////////////////////////////////////////
//Fonskiyonlar;
////////////////////////////////////////////////////////////////

function clearAllTodos() {
  if (confirm("Tüm todoları silmek istediğinize emin misiniz?")) {
    //todolist.innerHTML = "";//Bu yöntem tüm todoların içini boş yapar ve todolar artık gözükmez. Ama büyük projeler için yavaştır.

    while (todoList.firstElementChild != null) {
      // todo listin içinde hiç bir çocuğu olmazsa null yani boş bir değer döndürür. Bizde "todolist null değilse ilk childını sil" diye bir döngü oluşturduk. todolistin içi null yani boş değer olana kadar ilk çocuğu silinecek ve sonunda tüm çocukları silindiğinde null değeri dönecek ve döngümüz duracak.
      todoList.removeChild(todoList.firstElementChild);
    }
    localStorage.removeItem("todos"); //Local storagedan tüm todolarımızı sildik.
  }
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase(); //Aranan değerin harflerini küçük harfe çevirdik.
  const listItems = document.querySelectorAll(".list-group-item"); //Tüm listeleri seçip listItems isimle yeni bir consta atadık.

  listItems.forEach(function (listItem) {
    //Her listItemı çevirip içinde aranan değer var mı kontrol ettik.
    const text = listItem.textContent.toLocaleLowerCase(); //Listelerin içindeki tüm harfleri de küçük harfe çevirdik.
    if (text.indexOf(filterValue) === -1) {
      //Eğer yoksa indexof bize -1 değerini verdi. Ve -1 olanları sayfada gösterme dedik.
      listItem.setAttribute("style", "display : none !important"); //bootstrap classının özelliği olan d-flex in içinde important olarak display block özelliği eklenmiş. O yüzden bizim display none özelliğimizi gölgeliyor ve çalışmasını engelliyor. O yüzden bizde important özellik ekleyerek kendi özelliğimizin çalışmasını istediğimizi söylüyoruz
    } else {
      listItem.setAttribute("style", "display : block"); //Eğer listede varsa göster dedik.
    }
  });
}

function cizgiTodo(e) {
  if (e.target.className === "btn btn-outline-success float-start m-2 btn-sm") {
    e.target.parentElement.style.setProperty("text-decoration", "line-through");
  } else {
    e.target.parentElement.style.setProperty("text-decoration", "none");
  }
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    //Tıklanan yerin classı "fa fa-remove" mu kontrol ediyoruz.
    e.target.parentElement.parentElement.remove(); //Tıklanın yerin(e.targetin ki buda "fa fa-remove" classı) iki üst parentine ulaşarak <li> elemanını elde ettik ve bunun kaldırılmasını sağladık.
    deleteFromStorage(e.target.parentElement.parentElement.textContent); //deleteFromStorage fonksiyonuna silinmesi için tıklanan <li> elementinin içeriğini deleteFromStorage fonksiyonumuza yolluyoruz.
    showAlert("success", "Todo başarıyla silindi"); //Alert gösterdik
  }
}

function deleteFromStorage(deletetodo) {
  let todos = getTodosFromStorage(); //Storegaden bilgileri array olarak almak için daha önceden yazdığımız fonksiyonu çağırdık.

  todos.forEach(function (todo, index) {
    //Storagedan bilgiler geldikten sonra eğer todo ve deletetodo aynıysa splice metoduyla silinmesini istedik.
    if (todo === deletetodo) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos)); //Localstorage ı son bilgilerle güncelledik.
}

function loadAllTodosToUI() {
  let todos = getTodosFromStorage();

  todos.forEach(function (todo) {
    //Her bir döngüde storagedaki todoları UI'de göstermek için fonksiyon.
    addTodoToUI(todo); //Önceden oluşturduğumuz fonksiyonu kullandık.Bu fonksiyon yeni todoları oluşturuyordu.
  });
}

function addTodo(e) {
  //AddTodo fonsiyonunu oluşturuyoruz
  const newTodo = todoInput.value.trim(); //Yeni eklenin todonun değerini newTodo adlı yeni const oluştururak bu consta atadık ve trim fonskiyonuyla eğer baş ve sonda ki gereksiz boşluklar varsa sildik.

  if (newTodo === "") {
    /* <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div> */
    showAlert("danger", "Lütfen bir todo girin"); //danger alertini gösterdik
  } else {
    addTodoToUI(newTodo); //Arayüze newTodo yu eklemesini söyledik
    addTodoToStorage(newTodo); //Storage'a yeni eklenen todoyu kaydet dedik.
    showAlert("success", "Todo başarıyla eklendi"); //success alertini gösterdik
  }

  e.preventDefault(); //Sayfanın default özellik olarak yenilenmesini engellemek için
  todoInput.value = ""; // Yeni değer girildikten sonra gözükmesin diye.
}

function getTodosFromStorage() {
  //Storagedan tüm todoları alacak
  let todos;

  if (localStorage.getItem("todos") === null) {
    //eğer todos storageda yoksa  null  değeri döneceğinden array şeklinde todosu oluşturduk.
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // Eğer todos değeri varsa storage da string olarak kayıtlı olduğundan arraye çevirip değerini alıyoruz.
  }
  return todos;
}

function addTodoToStorage(newTodo) {
  //todoları storage eklemek için fonksiyon
  let todos = getTodosFromStorage(); //Tüm todoları storagedan aldık.

  todos.push(newTodo); //Yeni todoyu storage kayıt ettik.

  localStorage.setItem("todos", JSON.stringify(todos)); //Kayıt ettiğimiz todosu arrayden stringe çevirmek için JSON.stringfy kullandık.(Çünkü storage sadece string olarak kayıt edilebiliyor.)
}

function showAlert(type, message) {
  const alert = document.createElement("div");

  alert.className = `alert alert-${type}`; //Farklı renkteki bootstrap alert classlarını gösterebilmek için alertin classnameine ${type}'ı ekledik.

  alert.textContent = message; //Alertin mesajı

  firstCardBody.appendChild(alert); //alerti çocuk olarak ilk karta ekledik.

  setTimeout(function () {
    //Çıkan alertin 1,5 saniye sonra silinmesi için.
    alert.remove();
  }, 1500);
}

function addTodoToUI(newTodo) {
  //String değerini list item olarak arayüze ekleyecek. Ve burada yeni elementler oluşturulacak. Bunlar;

  //     <!--  <li  class="form-check-input mt-0 list-group-item d-flex justify-content-between ">
  //     Todo 1
  //     <a href="#" class="straw-item">
  //       <i class="fa-solid fa-pencil"></i>
  //     <a href="#" class="delete-item">
  //       <i class="fa fa-remove"></i>
  //     </a>
  //   </li> -->

  const listItem = document.createElement("li"); //List Itemi <li> şeklinde oluşturduk ve özelliklerini ekledik.
  listItem.className = "list-group-item "; //Li ye class ismini verdik.

  const buton = document.createElement("button");
  buton.className = "btn btn-outline-success float-start m-2 btn-sm";
  buton.type = "button";

  const butonn = document.createElement("button");
  butonn.className = "btn btn-outline-primary float-start m-2 btn-sm";
  butonn.type = "button";

  const link = document.createElement("a"); //Linki oluşturduk ve özelliklerini ekledik
  link.href = "#";
  link.className = "delete-item float-end";
  link.innerHTML = "<i class = 'fa fa-remove'  ></i>"; //Linkin içinde <i> elementini oluşturmak için innterHTML kullandık.

  listItem.appendChild(document.createTextNode(newTodo)); //Gelen formun değerinin yeni text alanı oluşturularak eklenmesi işlemi.Bu gelen içerik list itemin childı.
  listItem.appendChild(link); //Yukarıda oluşturduğumuz linki listeye ekledik.
  listItem.appendChild(buton);
  listItem.appendChild(butonn);

  todoList.appendChild(listItem); //Ve son olarak oluşturduğumuz list itemı <ul> ye çocuğu olarak ekledik.
}
