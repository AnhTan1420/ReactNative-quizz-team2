import { Strategy } from 'passport-jwt';
import { JwtPayloadWithRt } from '../types';
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    constructor();
    validate(req: any, payload: JwtPayloadWithRt): {
        rfToken: any;
        sub: string;
        role: string;
    };
}
export {};
