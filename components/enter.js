import { useEffect, useState } from "react";

//style
import styles from "../styles/enter.module.scss"

const Enter = () => {
    const [enter, setEnter] = useState(true);
    const [text, setText] = useState(false);
    const [video, setVideo] = useState(false);
    const [sec, setSec] = useState(0);
    const [myText, setMytext] = useState("")

    const handleEnter = () => {
        setEnter(false);
        if (enter) {
            setText(true);
        }
        setTimeout(() => {
            setText(false);
            setVideo(true);
        }, 9000)

        setInterval(() => {
            setSec(sec = sec +1)  
        },1000)
    }

    useEffect(()=> {
        if(sec <= 3) {
            setMytext("회차...")
        } else if (sec > 3 && sec <= 6) {
            setMytext("미안해요...")
        }else if (sec > 6 && sec <= 12) {
            setMytext("저를좀용서해주십시오...")
        } else if (sec > 12 && sec <= 15) {
            setMytext("저를좀용서해주십시오...")
        }
    },[sec])

    return (
        <>
            {enter && <div className={styles.enterClick}>
                <button onClick={handleEnter}>Open</button>
            </div>
            }
            {text && <div className={styles.content}>
                <p className={styles.enterText}>{myText}</p>
            </div>}
            {video && <div className={styles.contentVideo}>
                <iframe
                    src="https://player.vimeo.com/video/237456970?h=7c114d4a43&autoplay=1&loop=1"
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>}
            {video && <div className={styles.contentTop}></div>}
        </>
    );
}

export default Enter;