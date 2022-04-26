import AbstractView from "../models/AbstractView";

export  default class extends AbstractView {

    constructor() {
        super();
        this.setTitle = 'Posts';
    }

    async getHtml() {
        return `
            <h1>Hola Posts</h1>
        `;
    }

    async executeViewScript(){}
}