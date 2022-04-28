const getAll = (req, res) => {
    const response = {
        status: "succes",
        data: {
            messages: [
                message = "GETTING messages"
            ]
        }
    }
    res.json(response);
}

const get = (req, res) => {
    const response = {
        status: "succes",
        message: "GETTING messages",
        data: {
            messages: [
                {
                    "user" : "John",
                    "message" : "Hello"
                },
                {
                    "user": "Jane",
                    "message": "Hi"
                }
            ]
        }
    }
    res.json(response);
}

module.exports.getAll = getAll;
module.exports.get = get;
