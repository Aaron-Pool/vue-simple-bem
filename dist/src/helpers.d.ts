import type { DirectiveBinding, VNode } from 'vue';
export declare function generateBlockName(name: string): string;
export declare function generateElementName(block: string, name: string): string;
export declare function determineModifiers(block: string, elem: string | undefined, modifiers: {
    [key: string]: boolean;
}, conditions: {
    [key: string]: boolean;
}): string[];
export declare function addCssClasses(el: HTMLElement, classNames: string[]): void;
export declare function removeCssClasses(el: HTMLElement, classNames: string[]): void;
export declare function generateBemClasses({ instance, modifiers, value, arg }: DirectiveBinding, node: VNode): [string, string | undefined, string[]];
