export const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay))

export const formData = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataToObject = Object.fromEntries(formData)
    return formDataToObject
}