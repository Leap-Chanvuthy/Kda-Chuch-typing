import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import {faker as fakerES} from "@faker-js/faker/locale/es"
import {faker as fakerFR} from "@faker-js/faker/locale/fr"
import {faker as fakerAR} from "@faker-js/faker/locale/ar"
import {faker as fakerRU} from "@faker-js/faker/locale/ru"
import {faker as fakerIND} from "@faker-js/faker/locale/en_IND"
import {faker as fakerIT} from "@faker-js/faker/locale/it"

const generateESWords = (count) => {
  return fakerES.lorem.words(count);
}

const generateFRWords = (count) => {
  return fakerFR.random.words(count);
}

function generateRUWords(count) {
  return fakerRU.lorem.words(count);
}

function generateARWords(count) {
  return fakerAR.random.words(count);
}

function generateINDWords(count) {
  return fakerIND.random.words(count);
}

function generateITWords(count) {
  return fakerIT.random.words(count);
}

const generateWords = (count, option) => {
  if(option === 'words') {
    return faker.random.words(count).toLowerCase();
  }else if(option === 'city') {
    return faker.address.cityName();
  }else if(option === 'name') {
    return faker.name.firstName();
  }else if(option === 'email') {
    return faker.internet.email();
  }else if(option === 'animal') {
    return faker.animal.dog();
  }else if(option === 'commerce') {
    return faker.commerce.department();
  }else if(option === 'company') {
    return faker.company.bs();
  }else if(option === 'lorem') {
    return faker.lorem.words(count);
  }else if(option === 'music') {
    return faker.music.genre();
  }else if(option === 'vehicle') {
    return faker.vehicle.bicycle();
  }else if(option === 'system') {
    return faker.system.commonFileExt();
  }else if(option === 'number') {
    return faker.random.words(count).toLowerCase() + " " + faker.address.buildingNumber();
  }else if(option === 'spainish') {
    return generateESWords(count);
  }else if(option === 'french') {
    return generateFRWords(count);
  }else if(option === 'indian eng') {
    return generateINDWords(count);
  }else if(option === 'russian') {
    return generateRUWords(count);
  }else if(option === 'italian') {
    return generateITWords(count);
  }else if(option === 'arabic') {
    return generateARWords(count);
  }else {
    return faker.random.words(count).toLowerCase();
  }
};

const useWords = (count, option) => {
  const [words, setWords] = useState(generateWords(count, option));

  const updateWords = useCallback(() => {

    setWords(generateWords(count, option)) 

  }, [count, option]);

  return { words, updateWords };
};

export default useWords;
