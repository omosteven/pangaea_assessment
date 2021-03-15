// Helper Class of methods for the subscribe  and publish end points
const PubSub = require('pubsub-js');

const validator = require('validator');

class PubSubHelper { // helper method to subscribe

    static sendSubscription(topic) { // new Promise(r)

        var theSubscription = function (msg, data) {

            console.log(msg, data);

        };

        var token = PubSub.subscribe(topic, theSubscription);

        return token

    }

    // helper method to publish
    static sendPublish(topic, data) {

        var hasPublished = PubSub.publish(topic, data);

        if (hasPublished) {

            return hasPublished

        } else {

            const reSubscribe = this.sendSubscription(topic);

            // repeat recursively until the subscription becomes successful
            if (reSubscribe) {
                return this.sendPublish(topic, data)
            } else {
                return false;
            }

        }
    }

    static validateUrl(str) {
        return validator.isURL(str)
    }
}

module.exports = PubSubHelper;
