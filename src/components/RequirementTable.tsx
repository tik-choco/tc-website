import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function RequirementTable() {
  // 動作環境
  const data = [
    { item: "OS", requirement: "Windows 10以降" },
    { item: "CPU", requirement: "Intel Core i5 以上" },
    { item: "メモリ", requirement: "8GB 以上" },
    { item: "グラフィックカード", requirement: "NVIDIA GTX 1060 以上" },
    { item: "ストレージ", requirement: "20GB 以上の空き容量が必要" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>項目</TableCell>
            <TableCell>必要条件</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.item}>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.requirement}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RequirementTable;