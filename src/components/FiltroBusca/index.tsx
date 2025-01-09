import React, { useState } from 'react';
import { FiltroContainer, InputFiltro, SelectFiltro } from './style';

interface FiltroBuscaProps {
    onFiltrar: (filtro: string) => void;
    onTipoEspecialistaChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onMotivoChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  const FiltroBusca: React.FC<FiltroBuscaProps> = ({ onFiltrar, onTipoEspecialistaChange, onMotivoChange }) => {
      const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
  };

  return (
    <FiltroContainer>
      <InputFiltro
        type="text"
        placeholder="Procure por nome, especialidade..."
        value={filtro}
        onChange={handleFiltroChange}
      />
      <SelectFiltro onChange={onTipoEspecialistaChange}>
        <option value="">Tipo de Especialista</option>
        <option value="Psicólogo">Psicólogo</option>
        <option value="Psicanalista">Psicanalista</option>
        <option value="Terapeuta">Terapeuta</option>
        <option value="Coach">Coach</option>
      </SelectFiltro>
      <SelectFiltro onChange={onMotivoChange}>
        <option value="">Motivo</option>
        <option value="Ansiedade">Ansiedade</option>
        <option value="Depressão">Depressão</option>
        <option value="Transtorno obsessivo compulsivo (TOC)">Transtorno obsessivo compulsivo (TOC)</option>
        <option value="Burnout">Burnout</option>
        <option value="Alterações de humor">Alterações de humor</option>
        <option value="Medos e fobias">Medos e fobias</option>
      </SelectFiltro>

    </FiltroContainer>
  );
};

export default FiltroBusca;