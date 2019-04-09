export function changeValue(e) {
    console.log('testiiiing')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}