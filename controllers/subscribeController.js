const PubSubHelper = require("../middlewares/pubSubMethods");

class SubscribeController {

    static subscribe(req, res) {

        const {url} = req.body;

        // strip off the '/' from the request path
        const topic = req.path.substr(1,);
        //    validate the body payload
        console.log(topic)

        if (url === undefined && topic == undefined) {
            // send a bad request response

            res.status(400).send({url, topic})

        } else { // validate the url if actually a good url
            if (PubSubHelper.validateUrl(url)) {
                const subToken = PubSubHelper.sendSubscription(topic);

                console.log(subToken);

                // send Ok response
                if (subToken) {

                    res.status(200).send({url, topic})

                } else { // send a Not Found Response
                    res.status(404).send({url, topic})

                }
            } else { // send a Not Allowed response
                res.status(406).send({url, topic})

            }
        }
    }
}

module.exports = SubscribeController;
