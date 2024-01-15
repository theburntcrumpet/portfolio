import { Text } from "@chakra-ui/react";
import ShowOffCard from "../ShowOffCard";

function Next() {
    return (
        <ShowOffCard title="Where do we go from here?">
            <Text>I have plans this year to continue my game development hobby, and may be considering this as a potential career path.</Text>
            <Text>I also have a growing interest in machine learning. There's a lot of hype around ChatGPT and it's impact on society is undeniable, but I'm interested in exploring what can be achieved in ML beyond this.</Text>
            <Text>I'm excited to see what this year has to offer!</Text>
            <Text>Most importantly, I want to carry on making cool stuff and have fun doing it.</Text>
            <Text>Please contact me on LinkedIn if any of these things are of interest to you!</Text>
        </ShowOffCard>
    );
}

export default Next;