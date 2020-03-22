import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "Store/selectors";
import { Typography, TableRow, TableCell, Table } from "@material-ui/core";
import { fetchUsers } from "Store/action";
import * as Helper from "Helper";

const Layout = () => {
  const users = useSelector(selectUsers);

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Typography variant="h5">Users</Typography>
      {users.loading && <Typography>Loading Users</Typography>}
      <Table>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>Hospital Id</TableCell>
        </TableRow>
        {!users.loading &&
          users.data &&
          users.data.map(element => (
            <TableRow>
              <TableCell>{element.username}</TableCell>
              <TableCell>{String(element.isAdmin)}</TableCell>
              <TableCell>
                {Helper.getFormattedString(element.hospitalId)}
              </TableCell>
            </TableRow>
          ))}
      </Table>
      {!users.loading && !Boolean(users.data) && (
        <Typography>No Data available</Typography>
      )}
    </div>
  );
};

export default Layout;
