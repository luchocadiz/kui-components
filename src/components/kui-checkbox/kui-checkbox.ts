import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js"

@customElement("kui-checkbox")
export class KuiCheckbox extends LitElement {

    @property({ type: Boolean })
    checked: boolean = false;

    @property({ type: String })
    size: string = '24px';

    static styles = css`
        :host {
            display: inline-block;
        }
        .ck-2 {
            cursor: pointer;
            display: flex;
            align-items: center;
            width: auto;
        }
        .ck-2 input {
            display: none;
        }
        
        .ck-2 svg {
            overflow: visible;
            width: var(--checkbox-size, 32px); 
            height: var(--checkbox-size, 32px); 
        }
        .ck-2 .path {
            fill: none;
            stroke: #705CFF;
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
            stroke-dasharray: 241 9999999;
            stroke-dashoffset: 0;
        }
        
        .ck-2 input:checked ~ svg .path {
            stroke-dasharray: 70.5096664428711 9999999;
            stroke-dashoffset: -262.2723388671875;
        }
    `;

    toggle() {
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('lit-switch-checked', {
            detail: this.checked
        }));
    }

    render() {
        return html`
            <label class="ck-2" style="--checkbox-size: ${this.size};">
                <input type="checkbox" ?checked="${this.checked}" @change="${this.toggle}">
                <svg viewBox="0 0 68 68" height="32px" width="32px">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
            </label>
        `;
    }
}