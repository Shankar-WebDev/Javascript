function paraJSON(jsonString) {
  try {
    return (parsedData = JSON.parse(jsonString));
  } catch (error) {
    console.error(`a errror occured while parsing JSON:${error.message}`);
    return null;
  }
}

const validJson = '{"name:" "shankar", "age":19 }';
const invalidJSON = '{"name:" "shankar", "age":19 }'


const result1 = paraJSON(validJson)

const result2 = paraJSON(invalidJSON)
console.log(result1)