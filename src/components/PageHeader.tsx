import { Container, Title, Text } from "@mantine/core";

const CONTAINER_STYLE = {
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
};

export const PageHeader = () => {
  return (
    <Container p="xs" style={CONTAINER_STYLE}>
      <Title order={2} variant="gradient" weight="normal">
        {"{DEV.MOUNTAIN}"}
      </Title>
      <Text italic color="gray" weight="bold" ml="xs">
        Data Viz
      </Text>
    </Container>
  );
};
