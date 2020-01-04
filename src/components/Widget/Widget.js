import React from 'react'
import styles from './Widget.module.css'

export default () => {

    const script = document.createElement("script");

    script.src = "https://comments.app/js/widget.js?2";
    script.async = true;
    script['data-comments-app-website'] = "lqba9khA"
    script['data-limit']="10"
    script['data-color']="015"

    let wrapper = document.getElementsByClassName(styles.widget)
    wrapper.appendChild(script);



    return (
        <div className={styles.widget}>
        </div>
    )
}
