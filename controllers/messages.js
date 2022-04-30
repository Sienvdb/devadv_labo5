const getAll = (req, res) => {
    const username = req.query.user;

    if(username) {
        const response = {
            status: "success",
            message: "GETTING a message for username " + username,
            data: {
                messages: [
                    {
                        "user": username,
                        "message": "I like this app! Thx for building it " + username + "!"
                    }
                ]
            }
        }
        res.json(response);
    };
    const response = {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: [
                {
                    "user": "John",
                    "message": "Hello"
                },
                {
                    "user": "Jane",
                    "message": "Hi"
                }
            ]
        }
    };
    res.json(response);
};

const getId = (req, res) =>{
    const id = req.params.id;
    const message = "How are you?"

    const response = {
        status: "success",
        message: "GETTING message with id " + id,
        data: {
            messages: [
                {
                    "user": "John",
                    "message": message
                }
            ]
        }
    }
    res.json(response);
}

const create = (req, res) => {
    const user = "Jane";
    const message = "Very good, thx!"

    const response = {
        status: "success",
        message: "POSTING a new message for user " + user,
        data: {
            messages: [
                {
                    "user": user,
                    "message": message
                }
            ]
        }
    }
    res.json(response);
}

const update = (req, res) => {
    const id = req.params.id;

    const response ={
        status: "success",
        message: "UPDATING a message with id " + id,
        data: {
            messages: [
                {
                    "user": "Jane",
                    "message": "You're such a nice person!"
                },
                {
                    "user": "John",
                    "message": "Thank you, I realy like talking to you too!"
                }
            ]
        }
    }
    res.json(response);
}

const remove = (req, res) =>{
    const id = req.params.id;

    const response = {
        status: "success",
        message: "DELETING a message with id " + id,
        data: {
            messages: [
                {
                    "user": "Jane",
                    "message": "I really don't like that message!"
                }
            ]
        }
    }
    res.json(response);
}

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
