export declare class ResponseData<D> {
    data: D | D[];
    statusCode: number;
    message: string;
    constructor(data: D | D[], statusCode: number, message: string);
}
