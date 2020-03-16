exports.main = (res) => {

    const full = { query: res.query, body: res.body }
    return Promise.resolve({ fullResponse : full });
}