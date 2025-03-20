import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js"

@customElement("kui-toggle")
export class KuiToggle extends LitElement {

    @property({ type: Boolean }) 
    checked: Boolean = false;

    @property({ type: String })
    size: string = '15px';

    static styles = css`
        input {
            display: none;
        }
        label {
            display: flex;
            align-items: center;
            width: calc(var(--toggle-size, 80px) * 2.25);
            height: var(--toggle-size, 80px);
            padding: 5px;
            border-radius: 100px;
            background: #705CFF;
            cursor: pointer;
        }

        span {
            height: var(--toggle-size, 80px);
            width: var(--toggle-size, 80px);
            border-radius: 100%;
            transition: 0.5s;
            background: white;
            margin-left: 0;
        }

        input:checked ~ span {
            margin-left: calc(100% - var(--toggle-size, 80px));
            transition: 0.5s;
        }

        label:has(input:checked) {
            background: darkslategrey;
        }
    `;

    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('size')) {
            this.style.setProperty('--toggle-size', this.size);
        }
    }

    public toggle(){
        this.checked = !this.checked; 
    }

    render() {
        return html`
            <label for="toggle">
                <input id="toggle" type="checkbox" @change=${this.toggle}>
                <span></span>
            </label>
        `;
    }
}

