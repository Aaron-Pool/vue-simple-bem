import { Plugin } from 'vue';
export interface IVueSimpleBemOptions {
    name?: string;
}
declare const bemPlugin: Plugin;
export default bemPlugin;
export declare const bem: import("vue").Directive<any, any>;
