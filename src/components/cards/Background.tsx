import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

function Background() {
    return (
        <Card marginTop="2em" height="100%">
            <CardHeader color="green.200">
                <Heading size="md" className="cardHeading">My Background</Heading>
            </CardHeader>
            <CardBody className="cardContent" color="green.100">
                <Text>Entering the field of technology in 2014 as a technical support apprentice for Axiomatic Technology Ltd, I didn't know where to expect my career to take me. Becoming increasingly intrigued about automating aspects of my role, I learned to program simple scripts in python to automate routine tasks.</Text>
                <Text>I began studying Computing & IT with The Open University in 2015, and by 2017 I was a Software Developer for Axiomatic Technology Ltd - developing back-end services in Python and C++.</Text>
                <Text>I left Axiomatic Technology at the end of 2019 to complete my degree. I had a temporary job as a IT Technician for P3 charity during this time. I graduated in 2020 with BSc Hons. First-Class.</Text>
            </CardBody>
        </Card>
    );
}

export default Background;