const PubSub = require('pubsub-js');
const PubSubHelper = require('../middlewares/pubSubMethods');

class PublishController {

    static publish(req, res) {
        const data = req.body;
        const topic = req.path.substr(1,);
        //    validate the body payload

        if (data === undefined && typeof data == "object" && topic == undefined) {
            res.status(400).send({url: "", topic: ""})
        } else {

            const isPublished = PubSubHelper.sendPublish(topic, data);

            console.log(isPublished)
            res.status(200).send({url: "http://mysubscriber.test", topic: "seen"})
        }
    }
}

module.exports = PublishController;
