module.exports = function() {
    return {
        description: 'Close program',
        prompts: [],
        actions: () => {
            process.abort();
        }
    }
}