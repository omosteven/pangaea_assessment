// Controller to handle both
const PubSubHelper = require('../middlewares/pubSubMethods');

class PublishController {

    static publish(req, res) {
        const data = req.body;

        // strip off the '/' from the request path

        const topic = req.path.substr(1,);
        //    validate the body payload
        if ((data === undefined && typeof data == "object") || topic == undefined || topic.length == 0) { // send a bad request response
            res.status(400).send({topic, data})
        } else {

            const isPublished = PubSubHelper.sendPublish(topic, data);

            // send a Ok response
            if (isPublished) {
                res.status(200).send({topic, data})

            } else { // send a Not found response
                res.status(404).send({topic, data})

            }
        }
    }
}

module.exports = PublishController;
