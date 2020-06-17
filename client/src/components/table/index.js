import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../service/api';
import { Divider } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    headerTable: {
        backgroundColor: '#e96bab'
    }
});

export default function RankingTable(props) {
    const classes = useStyles();


    return (
        <>
            <h1>Tabela de Ranking</h1>
            <Divider />
            <br/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={classes.headerTable}>Nome da Empresa</StyledTableCell>
                            <StyledTableCell align="center" className={classes.headerTable}>Score</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.value.map(company => (
                            <StyledTableRow key={company.id}>
                                <StyledTableCell component="th" scope="row">
                                    {company.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{company.score}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
