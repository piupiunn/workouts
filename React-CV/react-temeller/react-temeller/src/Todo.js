import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  useState(); /* State özelliği sayfanın bir olay tetiklendikden sonra görülmesini istediğimiz sayfa içeriğini oluşturmamızı sağlar.*/
  const [modalIsOpen, setModalIsOpen] = useState(false);
  /* setModalIsOpen isimli fonksiyonu state ye atadık. Ve setModalIsopen içeriğinin sayfada sürekli render olmaması için default olarak false yaptık.*/
  function deleteHandler() {
    setModalIsOpen(true);
  }
  //Delete butonuna tıklandığında default olarak false ayarladığımız setModalIsOpen statei true olsun dedik.

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  /*Backdrop a tıkladığımızda setModalIsOpen stati false olsun dedik.*/

  return (
    /*h2 tagi içinde props.text atadık. Artık text=... olarak ne yazarsak  render edilecek. Propslar ana bileşen de(burada Todo.js) atanır ve kullanılacağı yerde tanımlanır.*/
    <div>
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
/*Modal fonksiyonu sayfasında prop olarak ayarladığımız ve butonlara atadığımız onCancel ve onConfirm eventlistenerlarını çağırıp closeModalHandleri çalıştırmasını söyledik. Yani örneğin onCancel aslında Modal sayfasında ki Cancel butonuna atanmış bir eventlistenear ama biz prop kullanıp Oncancel olarak atadığımız için buraya çağırabiliyoruz. */
export default Todo;
|