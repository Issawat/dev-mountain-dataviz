import { Container, Tabs } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

export type TabViewItem = {
  key: string;
  title: string;
  children: React.ReactNode;
  icon: TablerIcon;
};

type Props = {
  defaultKey?: string;
  tabs: TabViewItem[];
};

export const TabView = ({ tabs, defaultKey }: Props) => {
  const defaultTabKey = defaultKey ?? tabs[0].key;
  return (
    <Tabs radius="md" color="gray" defaultValue={defaultTabKey}>
      <Tabs.List
        mt="md"
        sx={{
          justifyContent: "center",
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Tab
            key={`tab-list-${tab.key}`}
            value={tab.key}
            icon={<tab.icon size={14} />}
          >
            {tab.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={`tab-panel-${tab.key}`} value={tab.key} pt="xs">
          <Container
            fluid
            sx={{
              overflowX: "auto",
            }}
          >
            {tab.children}
          </Container>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
