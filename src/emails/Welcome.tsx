import { Button, Heading, Html } from "@react-email/components";

interface WelcomeTemplateProps {
    firstName: string;
}

const WelcomeTemplate = ({
    firstName
}: WelcomeTemplateProps) => {
    return (
        <Html>
            <Heading>Welcome, {firstName}!</Heading>
            <Button
                href="https://example.com"
                style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
            >
                Click me
            </Button>
        </Html>
    );
};

export default WelcomeTemplate;
