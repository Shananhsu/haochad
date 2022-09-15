import { useState } from "react";

//style
import styles from "../styles/enter.module.scss"

const Enter = () => {
    const [enter, setEnter] = useState(true);
    const [text, setText] = useState(false);
    const [video, setVideo] = useState(false);

    const handleEnter = () => {
        setEnter(false);
        if (enter) {
            setText(true);
        }
        setTimeout(() => {
            setText(false);
            setVideo(true);
        }, 9000)
    }

    return (
        <>
            {enter && <div className={styles.enterClick}>
                <button onClick={handleEnter}>Open</button>
            </div>
            }
            {text && <div className={styles.content}>
                <p className={styles.enterText}></p>
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