import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Lista de reservas no formato: { mesa, horario }
let reservas = [];

function validarReserva(mesa, horario) {
    return !reservas.some(reserva => reserva.mesa === mesa && reserva.horario === horario);
}

app.post('/api/login', (req, res) => {
    const { horario, mensagem, mesa, numPessoa } = req.body;

    if (horario && mesa && numPessoa != null) {
        if (numPessoa > 4) {
            return res.json({
                sucesso: false,
                mensagem: 'As mesas só suportam 4 pessoas',
                reservas
            });
        }

        if (validarReserva(mesa, horario)) {
            reservas.push({ mesa, horario });
            return res.json({
                sucesso: true,
                mensagem: `Reserva realizada com sucesso para a mesa ${mesa} no horário ${horario}`,
                reservas
            });
        } else {
            return res.json({
                sucesso: false,
                mensagem: `Erro: A mesa ${mesa} já está reservada para o horário ${horario}`,
                reservas
            });
        }
    } else {
        return res.json({
            sucesso: false,
            mensagem: 'Por favor, certifique-se de preencher todos os campos de dados',
            reservas
        });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));