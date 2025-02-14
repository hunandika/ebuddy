import { Response } from 'express'
import { HttpResponse } from '#/entities/http'

export const generateAPIResponse = <T>(res: Response, body: HttpResponse<T>) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(body.statusCode).json(body)
}
