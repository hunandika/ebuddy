import * as dotenv from 'dotenv'
dotenv.config()
import { onRequest } from 'firebase-functions/v2/https'
import { setGlobalOptions } from 'firebase-functions/v2'
import app from '#core/app'

setGlobalOptions({ region: 'asia-southeast1' })
export const api = onRequest(app)
