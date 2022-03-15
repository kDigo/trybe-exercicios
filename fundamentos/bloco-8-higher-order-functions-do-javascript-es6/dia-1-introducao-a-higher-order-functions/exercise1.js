const newPerson = (nomeCompleto) => {
  // const personEmail = `${nomeCompleto.replace(' ', '_')}@trybe.com`;
  // const lowerCase = personEmail.toLowerCase();
  // const obj = {
  //   nome: nomeCompleto,
  //   email: lowerCase,
  // }
  // return obj;
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@trybe.com`}
};

// console.log(newPerson('Rodrigo Luiz'));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id4: callback('Rodrigo Luiz Freitas'),
  }
  return employees;
};

console.log(newEmployees(newPerson));