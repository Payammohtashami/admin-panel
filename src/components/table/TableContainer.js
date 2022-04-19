import React from 'react';
// Material
import {Table,
    TableBody,
    TableCell,
    TableContainer,
    Avatar,
    ListItemAvatar,
    Typography,
    TableHead,
    TableRow,
    Box
} from '@mui/material';
// avatar Picture
import avatar from '../../assets/image/avatar.jpg'
// function
import {rows,mark} from '../../helper/function';


const TablesContainer = () => {
      const tableHeadStyle = {
        th:{
            fontSize: "12px",
            fontWeight: "700",
            color: "var(--gray-color)"
        },
        "@media(max-width: 600px)": {
            th: {
                fontSize: "10px"
            }
        }
    }
      const tableItemStyle = {
            fontSize: "14px",
            color:"var(--gray-color)",
            "@media(max-width: 600px)":{
                fontSize: "11px"
            }
        }
    const nameStyle = {
        fontWeight: "700",
        color: "var(--dark-blue-color)",
        "@media(max-width: 600px)": {
            fontSize: "13px"
        }
}
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={tableHeadStyle}>
                        <TableCell>PRODUCT</TableCell>
                        <TableCell align="right">VALUE</TableCell>
                        <TableCell align="right">ADS SPENT</TableCell>
                        <TableCell align="right">REFUNDS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell align="left">
                        <ListItemAvatar>
                            <Box style={{display: "flex"}}>
                                <div>
                                    <Avatar style={{marginRight: "10px"}} alt="Remy Sharp" src={avatar} />
                                </div>
                                <div>
                                    <Typography sx={nameStyle}>{row.name}</Typography>
                                    <Typography sx={tableItemStyle}><span style={{color: "var(--green-color)"}}>{row.order}</span> orders</Typography>
                                </div>
                            </Box>
                        </ListItemAvatar>
                    </TableCell>
                        <TableCell align="right" sx={tableItemStyle}>{row.Price}</TableCell>
                        <TableCell align="right" sx={tableItemStyle}>{row.spend}</TableCell>
                        <TableCell align="right" sx={tableItemStyle}>{row.refuond}{mark(row.refuond)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablesContainer;