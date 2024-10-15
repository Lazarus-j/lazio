

export function fnGetElementById(id) { return document.getElementById(id); }
export function fnGetValueById(id) { return fnGetElementById(id).value; }
export function fnShowById(id) { fnGetElementById(id).style.display = 'block'; }
export function fnHideById(id) { fnGetElementById(id).style.display = 'none'; }
export function fnShow(element) { element.style.display = 'block'; }
export function fnHide(element) { element.style.display = 'none'; }
export function fnAddClass(element, className) { element.classList.add(className); }
export function fnRemoveClass(element, className) { element.classList.remove(className); }