import 'dotenv/config';
import fetchCommands from './src/fetchData.js'

const commands = await fetchCommands(process.env.SECRET);

// horPos, depPos = 0
// for x in input
// if forward x horPos += x
// if down x depPos += x
// if up x depPos -= x
// result = horPos * depPos
