module.exports = {
    required(name) {
        return (/.+/).test(name) ? true : `Required`;
    },

    minOptionSelected(number, array) {
        return array.length >= number ? true : `At least ${number} ${number === 1 ? 'option' : 'options'} must be selected`;
    }
}