import { Box, Button, Center, Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa6";
import smoothScrollTo from "../SmoothScrolling";


function Landing() {
    const thingsIAm = ["Full-stack Developer", "Hobbyist Game Developer", "Guitar Lover", "Tea Drinker", "Rock Fan 🤘"];
    const [thingIndex, setThingIndex] = useState(0);

    const incrementThing = () => {
        const nextIndex = thingIndex + 1;
        // Corrected the condition to cycle through the array
        if (nextIndex >= thingsIAm.length) {
            setThingIndex(0);
        } else {
            setThingIndex(nextIndex);
        }
    }

    return (
        <>
            <Center h="100vh" id="landing">
                <Box justifyContent={"center"}>
                    <Heading textAlign={"center"}>
                        <div color="green.100" className="nameHeading">
                            Matthew Sansom
                        </div>
                    </Heading>
                    <Text fontSize="xl" textAlign={"center"} color={"green.100"}>
                        {/* Added a key that changes with each item */}
                        <div key={thingIndex} className="typewriter" onAnimationEnd={incrementThing}>
                            {thingsIAm[thingIndex]}
                        </div>
                    </Text>
                    <Flex justifyContent="center" alignItems="center">
                        <Tooltip label="Github" bg={"green.100"}>
                            <a href="https://github.com/theburntcrumpet" target="_blank">
                                <Icon as={FaGithub} margin={"1em"} boxSize={"2em"} color="green.200"/>
                            </a>
                        </Tooltip>
                        <Tooltip label="itch.io" bg={"green.100"}>
                            <a href="https://theburntcrumpet.itch.io/" target="_blank">
                                <Icon as={FaItchIo} margin={"1em"} boxSize={"2em"} color="green.200"/>
                            </a>
                        </Tooltip>
                        <Tooltip label="LinkedIn" bg={"green.100"}>
                            <a href="https://www.linkedin.com/in/matthew-s-273730180/" target="_blank">
                                <Icon as={FaLinkedin} margin={"1em"} boxSize={"2em"} color="green.200"/>
                            </a>
                        </Tooltip>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center">
                        <Button color="green.200" onClick={() => smoothScrollTo('about')}>
                            Learn More
                        </Button>
                    </Flex>
                </Box>
            </Center>
        </>
    );
}

export default Landing;
