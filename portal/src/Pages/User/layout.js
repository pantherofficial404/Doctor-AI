import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "Store/selectors";
import { Typography, TableRow, TableCell, Table, IconButton } from "@material-ui/core";
import { fetchUsers } from "Store/action";
import * as Helper from "Helper";
import DeleteIcon from "@material-ui/icons/Delete";
import { NetworkServices } from "Services";
import config from "Config";

const Layout = () => {
  const users = useSelector(selectUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (user)=>{
    try{
      await NetworkServices.delete(`${config.SERVER_URL}/users/${user._id}`);
      Helper.openGlobalMessageBox({
        title:'Doctor AI',
        message:'User Deleted Successfully',
        type:'success',
      });
      fetchUsers();
    } catch(err){
      Helper.openGlobalMessageBox({
        title:'Doctor AI',
        message:'Something went wrong while deleting user. Please try again',
        type:'error',
      });
    }
  }

  return (
    <div>
      <Typography variant="h5">Users</Typography>
      {users.loading && <Typography>Loading Users</Typography>}
      <Table>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>Hospital Id</TableCell>
          <TableCell>Delete User</TableCell>
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
              <TableCell>
                <IconButton onClick={()=>handleDeleteUser(element)}>
                  <DeleteIcon color="secondary"/>
                </IconButton>
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
