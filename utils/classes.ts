import {lowerFirstLetter} from './namer';

const prefix = 'ice-tea';

function classArray(this: void, ...args: ClassValue[]): string[] {
    return unique(flatten(args.map((c: ClassValue) => {
        if (!c) { return ''; }
        if (typeof c === 'string') {
            return c;
        } else if (Array.isArray(c)) {
            return c;
        } else {
            return Object.keys(c).filter(k => c[k]);
        }
    })));
}

function classes(this: void, ...args: ClassValue[]): string {
    return classArray.apply(null, args).filter(Boolean).join(' ');
}

function createScopedClasses(componentName: string): (...args: ClassValue[]) => string {
    return (...args) => {
        return classArray.apply(null, args.length === 0 ? [''] : args).map((c: string) => {
            return [prefix, lowerFirstLetter(componentName), c].filter(v => v).join('-');
        }).filter(Boolean).join(' ');
    };
}

export {createScopedClasses, classes};

function unique(array: any[]): any[] {
    return Array.from(new Set(array));
}

function flatten(arr: any[]) {
    const stack = [...arr];
    const res = [];

    while (stack.length > 0) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}
