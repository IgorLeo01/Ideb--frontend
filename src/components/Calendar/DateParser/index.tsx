const dias: Array<String> = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'] 

export const getDia = (date: Date) => dias.at(date.getDay());

const meses: Array<String> = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
    'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

export const getMes = (date: Date) => meses.at(date.getMonth());