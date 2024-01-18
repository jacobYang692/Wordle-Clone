import { promises as fsPromises } from 'fs';

// Specify the path to your text file
const filePath = './words.txt';
let writeFilePath; // Define the variable outside the promise chain

// Read the content of the file
fsPromises.readFile(filePath, 'utf8')
  .then(data => {
    // Split the content into an array of all words
    const allWords = data.split(/\s+/);

    // Display the array of all words
    console.log(allWords);

    // Specify the path for the new file to write
    writeFilePath = './wordsToCopy.txt';

    // Write the array of words to the new file
    return fsPromises.writeFile(writeFilePath, allWords.join("', '"));
  })
  .then(() => {
    console.log(`Words have been written to ${writeFilePath}`);
  })
  .catch(err => {
    console.error('Error reading or writing the file:', err);
  });
