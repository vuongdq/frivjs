export class ResponseType<D>{
    data?: D|D[];
    statusCode?: number;
    message?: string;
}