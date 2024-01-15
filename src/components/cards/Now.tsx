import { Text } from "@chakra-ui/react";
import ShowOffCard from "../ShowOffCard";

function Now() {
    return (
        <ShowOffCard title="What I'm doing now">
            <Text>I'm currently working in the field of medical technology for EMIS (previously Healthcare Gateway) as a Software Developer.</Text>
            <Text>I've been there since 2021, when I joined Healthcare Gateway's AWS Migration team. While at Healthcare Gateway/EMIS, I've had the opportunity to lead technical discussions and learn a wide variety of technologies.</Text>
            <Text>These technologies include AWS (ECS, S3, EC2, CloudFront, SQS), Java (Java 11, Java 17, Spring Boot), React, Typescript, Linux, GitHub actions and more.</Text>
            <Text>I really enjoy the full-stack nature of my role, delivering solutions end-to-end.</Text>
        </ShowOffCard>
    );
}

export default Now;