import AbstractView from "../../models/AbstractView"
import html from './dashboard.html';

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
        console.log(html);
    }

    async getHtml() {
        return html;
    }

    executeViewScript() {
        const test = document.querySelector('#test');
        test.addEventListener('click', () => {
            console.log('Hello collons!!!!');
        })
    }
}