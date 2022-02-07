function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />; // onClick özelliğini props olarak Backdrop fonksiyonumuza atadık. ve buna isim olarak onCancel dedik.
}

export default Backdrop;
