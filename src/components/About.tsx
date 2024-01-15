import { Box, Button, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import smoothScrollTo from "../SmoothScrolling";
import Background from "./cards/Background";
import Next from "./cards/Next";
import Now from "./cards/Now";

function About() {
    return (
        <>
            <Flex direction="column" alignItems="center" minHeight="100vh" id="about">
                <Heading className="cardHeading" color="green.200">About Me</Heading>
                <Box marginLeft="4em" marginRight={"4em"}>
                    <Wrap justify="center" spacing="1em">
                        <WrapItem width={{ base: "100%", md: "calc(33.333% - 30px)" }} minH="70vh">
                            <Background/>
                        </WrapItem>
                        <WrapItem width={{ base: "100%", md: "calc(33.333% - 30px)" }} minH="70vh">
                            <Now/>
                        </WrapItem>
                        <WrapItem width={{ base: "100%", md: "calc(33.333% - 30px)" }} minH="70vh">
                            <Next/>
                        </WrapItem>
                    </Wrap>
                    <Flex justifyContent="center" alignItems="center"  margin="2em" padding="2em">
                        <Button color="green.200" onClick={() => smoothScrollTo('landing')}>
                            Back to Top
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </>
    );
}

export default About;
