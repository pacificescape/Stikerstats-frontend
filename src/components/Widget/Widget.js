import React, { Component } from 'react'
import styles from './Widget.module.css'

export default class Widget extends Component {

    componentDidMount() {


        let script = document.createElement("script");

        script.src = "https://comments.app/js/widget.js?2";
        script.async = true;
        script.setAttributeNS('string', 'data-comments-app-website', 'lqba9khA')
        script.setAttributeNS('string', 'data-limit','10')
        script.setAttributeNS('string', 'data-color','015')

        let wrapper = document.getElementsByClassName(styles.widget)
        wrapper[0].appendChild(script);
    }



    render() {
        return (
            <div className={styles.widget}>
            </div>
        )
    }
}
