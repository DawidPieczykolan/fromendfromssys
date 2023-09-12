import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { blue, red } from '@mui/material/colors';


export default function Reg() {
  const paperStyle = { padding: '50px 20px', width: 900, margin: '30px auto' };
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [telephone, setTelephone] = useState('');
  const [age, setAge] = useState('');
  const [register, setRegister] = useState([]);
  const handleClick = (e) => {
    e.preventDefault()
    const register = { name, surname, address, zipcode, street, number, telephone, age }
    console.log(register)
    fetch("http://localhost:8080/register/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(register)

      }).then(() => {
        console.log("New users added")
      })
  }
  useEffect(() => {
    fetch("http://localhost:8080/register/getAll")
    .then(res => res.json())
    .then((result) => {
      if (Array.isArray(result)) {
        setRegister(result);
      } else {
        // Handle the case where result is not an array
        console.error("API response is not an array:", result);
      }
    });
}, []);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: red }}><u>Rejestracja</u></h1>
          <TextField
            id="filled-basic"
            label="Imię"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Nazwisko"
            variant="filled"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Adres"
            variant="filled"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="kod pocztowy"
            variant="filled"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Ulica"
            variant="filled"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Numer domu"
            variant="filled"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Telefon"
            variant="filled"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Wiek"
            variant="filled"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick} >
            Send
          </Button>
         

        </Paper>
        <h1 style={{ color:blue }}><u>Users</u></h1>
        <TableContainer component={Paper} style={{ marginTop: '50px', margin:'20px',textAlign: 'left',width:'900px'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Imię</TableCell>
                <TableCell>Nazwisko</TableCell>
                <TableCell>Adres</TableCell>
                <TableCell>Kod pocztowy</TableCell>
                <TableCell>Ulica</TableCell>
                <TableCell>Numer</TableCell>
                  <TableCell>Telefon</TableCell>
                  <TableCell>Wiek</TableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {register.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.surname}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.zipcode}</TableCell>
                  <TableCell>{row.street}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.telephone}</TableCell>
                  <TableCell>{row.age}</TableCell>

                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
