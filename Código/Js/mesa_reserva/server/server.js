import express from 'express'
import cors from 'cors'
//const express = require('express');
//const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/login', (req, res) => {const { horario, mensagem, mesa, numPessoa } = req.body;

var reservaMes = []
var reservaHor = []
var reservaMesTamanho = reservaMes
var i = 0

function ValidarReserva() {
    if(true) {
        if (reservaMesTamanho[0] == mesa) {
        return reservaMesTamanho[0];
        }
       /* for (i = 0; i < reservaMesTamanho.length; i++) {
            if (reservaMes[i] == mesa && reservaHor[i] == horario) {
                return false
            }
        }*/
    } else {
        return false
    }


}

    if (horario != null && mesa != null && numPessoa != null ) {
        if (numPessoa > 4) {
            res.json({ mensagem:`As mesas só suportam 4 pessoas` });
        } else {
            
            if (true) {
                reservaMes  .push(mesa)
                reservaHor.push(horario)
                res.json({ mensagem:`${reservaMes}` });

                
            } else {
                res.json({ mensagem:`Mesa já reservada, tente outra mesa ou outro horário` });
            }
        }
    } else {
        res.json({ status:'erro'
    , mensagem:'Por favor, certifique-se de preencher todos os campos de dados' });
    }
    });

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))