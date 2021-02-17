const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  return houses[Math.floor(Math.random() * houses.length)];
};

export default sortingHat;
