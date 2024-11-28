import Image from "next/image"
import Link from "next/link"
import styles from "./BodyTop.module.css"

const BodyTop = () => {
  return (
    <div className={styles.appinfo}>
        <div>
            <span>For the best experience use </span>
            <Link href="https://bdshorts.com/mobile" style={{ color: "white", appearance: "none", fontWeight: "600" }}>bdshorts</Link> 
            <span> app on your smartphone</span>
        </div>
        <div className={styles.store}>
        <Link href="#"><Image src="/appstore.png" alt="app store" height={52} width={140} /></Link>
            <Link href="#"><Image src="/playstore.png" alt="play store" height={52} width={140} /></Link>
        </div>
    </div>
  )
}

export default BodyTop