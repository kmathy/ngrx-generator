module.exports = {
    required(name) {
        return (/.+/).test(name) ? true : `Required`;
    }
}