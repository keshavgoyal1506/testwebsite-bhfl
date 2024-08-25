const express = require('express');
const path = require('path');

const app = express();

// Define routes and middleware here
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/bfhl', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json()); // To parse JSON request bodies

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input data" });
    }

    // Extract numbers
    const numbers = data.filter(item => !isNaN(item));

    // Extract alphabets
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    // Generate the response object
    const response = {
        is_success: true,
        user_id: "keshav_goyal_15062002",
        email: "keshav74123@gmail.com",
        roll_number: "21BEC2297",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});