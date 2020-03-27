import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const hisory = useHistory();

  async function handlerRegister(e){
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const resposta = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${resposta.data.id}`);  
      hisory.push('/');
    } catch(err) {
      alert('Erro no Cadastro tente novamente: ', err);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
          
          <Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#E02041"/>
						Tenho conta
					</Link>
        </section>

        <form onSubmit={handlerRegister}>
          <input 
            placeholder="Nome da ONG"
            value={name} 
            onChange={e => setName(e.target.value)} />
          <input 
            type="email" 
            placeholder="E-Mail" 
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <input 
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)} />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)} />            
            <input 
              placeholder="UF" 
              style={{width:80}} 
              value={uf}
              onChange={e => setUF(e.target.value)} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}