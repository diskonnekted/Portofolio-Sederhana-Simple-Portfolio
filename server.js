import { handler } from './dist/server/entry.mjs';
import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('dist/client'));
app.use((req, res, next) => {
    handler(req, res, next);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
