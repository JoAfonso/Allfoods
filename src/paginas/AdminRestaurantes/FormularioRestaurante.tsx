import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import IRestaurante from "../../interfaces/IRestaurante";
import { Box } from "@mui/system";
import http from "../../http";

const FormularioRestaurante = () => {
  const parametros = useParams();

  useEffect(() => {
    if (parametros.id) {
      http
        .get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then((resp) => setnomeRestaurante(resp.data.nome));
    }
  }, [parametros]);

  const [nomeRestaurante, setnomeRestaurante] = useState("");

  const aoSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parametros.id) {
      http
        .put(`restaurantes/${parametros.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante atualizado com sucesso");
        });
    } else {
      http
        .post("restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante cadastrado com sucesso");
        });
    }
  };

  return (
    
    <>
   
      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              <Typography component="h1" variant="h6">
                Formulario de Restaurantes
              </Typography>
              <Box component="form" sx={{width: "100%"}} onSubmit={aoSubmitForm}>
                <TextField
                  value={nomeRestaurante}
                  onChange={(e) => setnomeRestaurante(e.target.value)}
                  label="Nome do Restaurante"
                  variant="standard"
                  fullWidth
                  required
                />
                <Button
                  sx={{ marginTop: 1 }}
                  type="submit"
                  variant="outlined"
                  fullWidth
                >
                  Salvar
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FormularioRestaurante;
