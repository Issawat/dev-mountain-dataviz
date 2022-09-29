import { Center, Loader, Table } from "@mantine/core";
import { DataComponentProps } from "../../hooks/useData";

export const TableView = ({ data, isLoading }: DataComponentProps) => {
  if (isLoading)
    return (
      <Center>
        <Loader mt={10} size="xl" />;
      </Center>
    );
  return (
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>employeeId</th>
            <th>passportNo</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>gender</th>
            <th>birthDate</th>
            <th>nationality</th>
            <th>hiredDate</th>
            <th>department</th>
            <th>position</th>
            <th>status</th>
            <th>workRegion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.employeeId}>
              <td>{item.employeeId}</td>
              <td>{item.passportNo}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.gender}</td>
              <td>{item.birthDate}</td>
              <td>{item.nationality}</td>
              <td>{item.hiredDate}</td>
              <td>{item.department}</td>
              <td>{item.position}</td>
              <td>{item.status}</td>
              <td>{item.workRegion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};
