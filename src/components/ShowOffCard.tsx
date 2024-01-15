import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    title: string,
    children?: ReactNode
}

function ShowOffCard(props:Props) {
    return (
        <Card marginTop="2em" height="100%">
            <CardHeader color="green.200">
                <Heading size="md" className="cardHeading">{props.title}</Heading>
            </CardHeader>
            <CardBody className="cardContent" color="green.100">
                {props.children}
            </CardBody>
        </Card>
    );
}

export default ShowOffCard;