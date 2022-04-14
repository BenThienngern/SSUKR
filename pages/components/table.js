import { Table } from "@nextui-org/react";

export default function LogTable() {
  const columns = [
    {
      key: "date",
      label: "Date",
    },
    {
      key: "type",
      label: "Action Type",
    },
    {
      key: "by",
      label: "By",
    },
    {
      key: "amount",
      label: "Amount",
    },
  ];
  const rows = [
    {
      key: "1",
      date: "11 Apr 2022",
      type: "Donation",
      by: "Unnamed Contributions",
      amount: "20.00 $",
    },
    {
      key: "2",
      date: "11 Apr 2022",
      type: "Donation",
      by: "Mr. Firstname Lastname",
      amount: "20.00 $",
    },
  ];
  return (
    <Table
      aria-label="Activity log table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
