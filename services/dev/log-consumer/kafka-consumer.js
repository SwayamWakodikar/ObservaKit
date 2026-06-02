import { Kafka } from "kafkajs";

const brokers = (process.env.KAFKA_BROKER ?? "localhost:9092")
    .split(",")
    .map((broker) => broker.trim())
    .filter(Boolean);

const kafka = new Kafka({
    clientId: "log-consumer",
    brokers,
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