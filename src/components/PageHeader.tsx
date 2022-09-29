import { Container, Title, Text, Sx } from "@mantine/core";

const CONTAINER_STYLE: Sx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
};

export const PageHeader = () => {
  return (
    <Container p="xs" sx={CONTAINER_STYLE}>
      <Title order={2} variant="gradient" weight="bold">
        {"{DEV.MOUNTAIN}"}
      </Title>
      <Text italic color="gray" weight="bold" ml="xs">
        Data Viz
      </Text>
    </Container>
  );
};
