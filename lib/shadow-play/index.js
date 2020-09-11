import { detect } from 'detect-browser';
import _ from "lodash";

const CONFIG = {
    backendURL: 'http://localhost:3001',
}

export function setConfig(update) {
    _.extend(CONFIG, update);
}

export default function shadowPlay(component) {
    if (detect().type === 'browser') {
        return frontend(component);
    } else {
        return backend(component);
    }
}

function frontend(component) {
    return {
        ...component,
        mounted() {
            console.log('mounted:', component.name);
            console.log('send to: ' + CONFIG.backendURL);
            fetch(CONFIG.backendURL + `/create/${component.name}`, {
                method: 'POST',
            }).then(resp => resp.json()).then(data => console.log(data));
            component.mounted && component.mounted();
        }
    }
}

function backend(component) {
    return {
        name: component.name,
        data: component.data,
    }
}