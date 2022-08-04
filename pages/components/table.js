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
      key: "3",
      date: "1 Aug 2022",
      type: "Donation distribution (2 recipients)",
      by: "Bright Blue Star team",
      amount: "14.00 $",
    },
    {
      key: "2",
      date: "28 Jul 2022",
      type: "Donation to website",
      by: "Bright Blue Star team",
      amount: "5.00 $",
    },
    {
      key: "1",
      date: "20 Jul 2022",
      type: "Donation to website",
      by: "-",
      amount: "100.00 $",
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
