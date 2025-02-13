import React from 'react'
import styles from "./insructor.module.css"
import profile from "../../../public/images/profile.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faGraduationCap, faHotel } from '@fortawesome/free-solid-svg-icons'

const Insructor = ({
    lo,
    showAr
} : {
    lo: string,
    showAr?: boolean
}) => {
    const classNames = [
        styles.insructor,
        lo === "ar" && showAr ? styles.ar : ""
    ]
  return (
    <div className={classNames.length > 1 ? classNames.join(" ") : classNames[0]}>
        {
            lo === "ar" && showAr ? 
            <div className={styles.details}>
                <div className={styles.profile}>
                    <div className={styles.img}>
                        <Image src={profile} alt={"صورة المحاضر محمد عبد الفتاح"}></Image>
                    </div>
                    <div>
                        <h3>محمد عبد الفتاح</h3>
                        <span>المحاضر</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p><FontAwesomeIcon icon={faGraduationCap} /><span>باحث دكتوراه</span></p>
                    <div>
                        <FontAwesomeIcon icon={faBuildingColumns} />
                        <span>كلية الطب، جامعة مدريد المستقلة (UAM)، إسبانيا</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHotel} />
                        <span>المركز الوطني لأبحاث السرطان (CNIO)، مدريد، إسبانيا</span>
                    </div>
                </div>
            </div>
            :
            <div className={styles.details}>
                <div className={styles.profile}>
                    <div className={styles.img}>
                        <Image src={profile} alt={"Instuctor Mohmed Abdalfttah Picture"}></Image>
                    </div>
                    <div>
                        <h3>Mohmed Abdalfttah</h3>
                        <span>Instructor</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p><FontAwesomeIcon icon={faGraduationCap} />  <span>PhD Candidate</span></p>
                    <div>
                        <FontAwesomeIcon icon={faBuildingColumns} />
                        <span>Faculty of Medicine, Autonomous University of Madrid</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHotel} />
                        <span>National Cancer Research Center (CNIO)</span>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Insructor