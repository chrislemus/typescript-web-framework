import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });
user.on('change', () => {
  console.log('object');
});
user.on('change', () => {
  console.log('second');
});

user.trigger('dew');

console.log(user);
// user.set({ name: 'newName' });

// console.log(user.get('name'));
