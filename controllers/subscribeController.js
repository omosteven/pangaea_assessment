const PubSubHelper = require("../middlewares/pubSubMethods");

class SubscribeController {

    static subscribe(req, res) {

        const {url} = req.body;

        const topic = req.path.substr(1,);
        //    validate the body payload
        console.log(topic)

        if (url === undefined && topic == undefined) {

            res.status(400).send({url: "", topic: ""})

        } else {

            if (PubSubHelper.validateUrl(url)) {
                const subToken = PubSubHelper.sendSubscription(topic);

                console.log(subToken);

                if (subToken) {

                    res.status(200).send({url: url, topic: topic})

                } else {

                    res.status(404).send({url: url, topic: topic})

                }
            } else {
                res.status(400).send({url: url, topic: topic})

            }
        }
    }
}

module.exports = SubscribeController;
