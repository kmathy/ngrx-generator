module.exports = {
    validateName(name) {
        return (/.+/).test(name) ? true : `A name is required`;
    }
}