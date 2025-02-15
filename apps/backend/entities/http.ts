import { Meta } from '#entities/meta'

export interface HttpResponse<T> {
    data?: T | null
    meta?: Meta | null
    message?: string
    statusCode: number
}
