import { onRequest } from 'firebase-functions/v2/https'
import { setGlobalOptions } from 'firebase-functions/v2'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../../.env')
dotenv.config({ path: envPath })

setGlobalOptions({ region: 'asia-southeast1' })
const app = require(path.join(__dirname, '../../dist/core/app.js')).default
export const api = onRequest(app)
