function createStudent(name) {
  return {
    name,
    feedback() {
      return 'Eita pessoa boa!';
    },
  };
}

module.exports = createStudent;
