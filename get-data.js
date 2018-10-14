const pagination = require('./pagination')
const types = ['info', 'critical'];
const events = require('./events');

module.exports = function (req) {
    const type = req.query.type;
    const eventsArr = events.events;
    const result = {
        events: []
    };
    let qTypes;

    if (type) {
        qTypes = type.split(':');
    } else {
        return { 
            response: {
                events: pagination(events.events, req)
            } 
        };
    }

    for (var i = 0; i < qTypes.length; i++) {
        if (!types.includes(qTypes[i])) {
            return {
                status: 400,
                response: 'incorrect type'
            }
        }
    }

    result.events = eventsArr.filter((event) => qTypes.includes(event.type));
    result.events = pagination(result.events, req);

    return {
        response: result
    }
};
