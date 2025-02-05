import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { count } from "console";
import { findAllstudent } from "../student/services/students";
import Image from "next/image";


export default async function StudentPage() {
const students = await findAllstudent()

  return (
    <Container>
      <Typography variant="h3" gutterBottom>ข้อมูลนักเรียน</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ชื่อ</TableCell>
              <TableCell>ห้องเรียน</TableCell>
              <TableCell>ปี</TableCell>
              <TableCell>รูปภาพ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.classroom}</TableCell>
                <TableCell>{student.Year}</TableCell>
                <TableCell><Image src={student.img} alt={"img"} width={50} height={50}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
