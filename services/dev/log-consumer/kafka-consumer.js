import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "log-consumer",
    brokers: ["localhost:9092"]
});

const consumer = kafka.consumer({ groupId: "log-group" });

await consumer.connect();

await consumer.subscribe({
    topic: "logs-topic",
    fromBeginning: true
});

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            topic,
            partition,
            offset: message.offset,
            value: message.value.toString(),
        });
    },
});