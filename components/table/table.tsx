import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
  Input,
} from "@nextui-org/react";
import React, { useState } from "react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";

export const TableWrapper = () => {
  // State untuk halaman, item per halaman, dan teks pencarian
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  // Filter data berdasarkan input pencarian
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung jumlah halaman total berdasarkan hasil pencarian
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Dapatkan data yang akan ditampilkan berdasarkan halaman saat ini
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Kolom Input untuk Pencarian */}
      <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset halaman ke 1 saat pencarian berubah
        }}
      />
      
      <Table aria-label="Example table with search and pagination">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={currentData}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({ user: item, columnKey: columnKey })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {/* Komponen Pagination */}
      <Pagination
        total={totalPages}
        initialPage={1}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
