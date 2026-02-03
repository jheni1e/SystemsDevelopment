use('atividade_aula_2');

const arrpeople = [
  {
    nome: "Ana Silva",
    telefone: "999912345",
    email: "ana.silva@gmail.com",
    cidade: "São Paulo",
    dataCadastro: new Date("2023-02-10")
  },
  {
    nome: "Bruno Costa",
    telefone: "41987654321",
    email: "bruno.costa@hotmail.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2022-11-05")
  },
  {
    nome: "Amanda Souza",
    telefone: "988776655",
    email: "amanda.souza@gmail.com",
    cidade: "Rio de Janeiro",
    dataCadastro: new Date("2024-01-15")
  },
  {
    nome: "Carlos Pereira",
    telefone: "41911223344",
    email: "carlos@empresa.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2023-06-20")
  },
  {
    nome: "Daniel Rocha",
    telefone: "977665544",
    email: "daniel.rocha@gmail.com",
    cidade: "São Paulo",
    dataCadastro: new Date("2021-09-30")
  }
];

use('atividade_aula_2');
db.contatos.insertMany(arrpeople);

const arrbosch = [
  {
    nome: "Malu Geraldo",
    telefone: "999954321",
    email: "malu.morais@gmail.com",
    cidade: "Santo André",
    dataCadastro: new Date("2025-08-14")
  },
  {
    nome: "Julia Gabriel",
    telefone: "41987612345",
    email: "julia.santos@hotmail.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2025-01-17")
  },
  {
    nome: "Fernanda Fialho",
    telefone: "988778899",
    email: "fehfito.fialho@gmail.com",
    cidade: "Araucária",
    dataCadastro: new Date("2025-02-02")
  },
  {
    nome: "Thayna Schaeffer",
    telefone: "41911225566",
    email: "thayna.schaeffer@gmail.com",
    cidade: "São José dos Pinhais",
    dataCadastro: new Date("2025-02-08")
  },
  {
    nome: "Joyce Vasco",
    telefone: "977663322",
    email: "joyjoy.vasco@gmail.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2025-06-09")
  }
];

use('atividade_aula_2');
db.contatos.insertMany(arrbosch);