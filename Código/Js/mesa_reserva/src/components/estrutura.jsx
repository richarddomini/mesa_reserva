import React, { useState } from 'react';

function Estrutura() {
    const [horario, setHorario] = useState('');
    const [mesa, setMesa] = useState('');
    const [nome, setNome] = useState('');
    const [numPessoa, setNumPessoa] = useState('');
    const [mensagem, setMensagem] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resposta = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ horario, mesa, nome, numPessoa }),
            });

            
            const dados = await resposta.json();
            setMensagem(dados.mensagem || 'Servidor Funcionando');
            
        } catch (error) {
            setMensagem('Erro ao conectar com o servidor.');
        }
    };
        

    return(
        <div>
            <main>
            <section class="card">
                <h2>Fazer Reserva</h2>
                <form onSubmit={handleSubmit}>
                    <label>Horário:</label>
                    <select name="horario" id="horario" required onChange={(e) => setHorario(e.target.value)}>
                        <option value="" disabled selected>Selecione</option>
                        <option value="almoco">Almoço</option>
                        <option value="jantar">Jantar</option>
                    </select>
                    
                    <label>Número da Mesa:</label>
                    <select name="mesa" id="mesa" required onChange={(e) => setMesa(e.target.value)}>
                        <option value="" disabled selected>Selecione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    
                    <label>Número de Pessoas:</label>
                    <input type="number" min="1" max="4" required onChange={(e) => setNumPessoa(e.target.value)}></input>
            
                    <label for="">Nome:</label>
                    <input type="text" required onChange={(e) => setNome(e.target.value)}></input>
                    <button type="submit" class="btn">Reservar</button>
                </form>

                {mensagem && <p>{mensagem}</p>}
            </section>
                
            </main>

                       
        </div>
    
    )
}

export default Estrutura