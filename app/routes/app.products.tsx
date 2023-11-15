import {BlockStack, Card, Layout, Page, Text, List} from "@shopify/polaris";


export default function ProductsPage() {
  return (
    <Page>
      <ui-title-bar title="Products page"/>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="p" variant="bodyMd">
                List of products
              </Text>
              <List type="bullet">
                <List.Item>Yellow shirt</List.Item>
                <List.Item>Red shirt</List.Item>
                <List.Item>Green shirt</List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
