import { Button, Dialog, DialogContent, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import "./Cliente.css"
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { useState } from "react";
import axios from 'axios';


export const Cliente = () => {
    const columns = [
        { id: 'id', name: 'Id' },
        { id: 'name', name: 'Nombre' },
        { id: 'lastname', name: 'Apellido' },
        { id: 'birthday', name: 'Nacimiento' },
        { id: 'dni', name: 'DNI' },
        { id: 'cuit', name: 'CUIT' },
        { id: 'gender', name: 'Sexo' },
        { id: 'telephone', name: 'Teléfono' },
        { id: 'address', name: 'Dirección' },
        { id: 'city', name: 'Ciudad' },
        { id: 'province', name: 'Provincia' },
        { id: 'country', name: 'País' },
        { id: 'state', name: 'State' },
        { id: 'category', name: 'Categoria' },
        { id: 'email', name: 'Email' },
    ]

    //useState Cliente
    const [id, idChange] = useState(0);
    const [name, nameChange] = useState('');
    const [lastname, lastnameChange] = useState('');
    const [birthday, birthdayChange] = useState(null); // Asegúrate de que sea null inicialmente
    const [dni, dniChange] = useState('');
    const [cuit, cuitChange] = useState('');
    const [gender, genderChange] = useState('');
    const [telephone, telephoneChange] = useState('');
    const [address, addressChange] = useState('');
    const [city, cityChange] = useState('');
    const [province, provinceChange] = useState('');
    const [country, countryChange] = useState('Argentina');
    const [state, stateChange] = useState(true);
    const [category, categoryChange] = useState("A");
    const [email, emailChange] = useState('');

    //useState open
    const [open, openChange] = useState(false);

    const functionAdd = () => {
        openPopUp();
    }

    const closePopUp = () => {
        openChange(false);
    }

    const openPopUp = () => {
        openChange(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear objeto con todos los campos
        const clientData = {
            name: name,
            lastname: lastname,
            birthday: birthday ? birthday.format('YYYY-MM-DD') : null, // Formato de fecha
            dni: dni,
            cuit: cuit,
            gender: gender,
            telephone: telephone,
            address: address,
            city: city,
            province: province,
            country: country,
            state: true,
            category: "A",
            email: email,
        };

        try {
            // Realiza la solicitud POST al servidor
            const response = await axios.post('http://localhost:4000/clientes', clientData);
            console.log('Cliente creado:', response.data);
            // Aquí puedes agregar lógica para manejar la respuesta, como limpiar el formulario o mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error al crear el cliente:', error.response ? error.response.data : error.message);
            // Aquí puedes agregar lógica para manejar el error, como mostrar un mensaje al usuario
        }
    };

    return (
        <>
            <div>
                <Paper>
                    <div className="div-btn">
                        <Button variant="contained" size="large" onClick={functionAdd}>Agregar (+)</Button>
                        <div className="spacer" /> {/* Espaciador opcional */}
                        <LogoutButton variant="outlined" size="large" />
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id}>{column.name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Aquí puedes agregar las filas de la tabla */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

                <Dialog open={open} onClose={closePopUp} fullWidth maxWidth="sm">
                    <DialogTitle>
                        <span>Agregar cliente</span>
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField required error={name.length === 0} variant="outlined" label="Nombre" value={name} onChange={(e) => { nameChange(e.target.value) }} />
                                <TextField required error={lastname.length === 0} variant="outlined" label="Apellido" value={lastname} onChange={(e) => { lastnameChange(e.target.value) }} />

                                {/* Aquí agregamos el DatePicker */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Nacimiento"
                                        value={birthday}
                                        onChange={(newValue) => {
                                            // Asegúrate de que sea un objeto Day.js
                                            birthdayChange(newValue ? dayjs(newValue) : null);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>


                                {/* Otros campos de texto */}
                                <TextField required error={dni === 0} type="number" variant="outlined" label="DNI" value={dni} onChange={(e) => { dniChange(e.target.value) }} />
                                <TextField required error={cuit === 0} variant="outlined" label="CUIT" type="number" value={cuit} onChange={(e) => { cuitChange(e.target.value) }} />
                                <TextField required error={gender.length === 0} variant="outlined" label="Sexo" value={gender} onChange={(e) => { genderChange(e.target.value) }} />
                                <TextField variant="outlined" label="Teléfono" type="number" value={telephone} onChange={(e) => { telephoneChange(e.target.value) }} />
                                <TextField variant="outlined" label="Dirección" value={address} onChange={(e) => { addressChange(e.target.value) }} />
                                <TextField variant="outlined" label="Ciudad" value={city} onChange={(e) => { cityChange(e.target.value) }} />
                                <TextField variant="outlined" label="Provincia" value={province} onChange={(e) => { provinceChange(e.target.value) }} />
                                <TextField variant="outlined" label="País" value={country} onChange={(e) => { countryChange(e.target.value) }} />
                                <TextField variant="outlined" label="Email" value={email} onChange={(e) => { emailChange(e.target.value) }} />
                                <Button type="submit" variant="contained" color="primary">Agregar cliente</Button>
                            </Stack>
                        </form>
                    </DialogContent>
                </Dialog>

            </div>
        </>
    );
} 