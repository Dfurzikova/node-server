import { Request } from 'express'

module.exports = function (eventsList:[], req:Request) {
    const cloneEvents = [].concat(eventsList);
    const query = req.query;

    query.page = query.page || 1;
    
    if (query.page_size && query.page) {
        let size = Number(query.page_size);
        let page = Number(query.page) - 1;
        let from = (size * page);
        let to = from + size;

        return cloneEvents.slice(from, to);
    }

    return cloneEvents;
}
