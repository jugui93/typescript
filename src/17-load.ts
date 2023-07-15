import _ from 'lodash';

const data = [
  {
    username: 'Juan',
    role: 'admin'
  },
  {
    username: 'Andrea',
    role: 'seller'
  },
  {
    username: 'Emily',
    role: 'seller'
  },
  {
    username: 'Eliana',
    role: 'customer'
  },
]

const rta = _.groupBy(data, item => item.role);
console.log(rta);
