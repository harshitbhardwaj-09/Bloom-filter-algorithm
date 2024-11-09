import { BloomFilter } from './bloom-filter.js';

const bloom=new BloomFilter(1000,3);

bloom.add("harshit");
bloom.add("karan");

console.log(bloom.alreadyExist("bhardwaj"));
console.log(bloom.alreadyExist("harshit"));
console.log(bloom.alreadyExist("karan"));