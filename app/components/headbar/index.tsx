  import Image from "next/image";
  import logo from "../../../public/logo.svg"
  import styles from "./style.module.css"

  export default function Headbar() {
    return (
    <div className= {styles.headbar}>
      <div>
        <Image src={logo} fill={true} alt="Ancha Logo"/>
      </div>
    </div>
  )}

